import http from 'http'
import chalk from 'chalk'
import util from 'util'
import cp from 'child_process'
import { cpu, mem, netstat } from 'node-os-utils'

const fp = require("find-free-port")

const exec = util.promisify(cp.exec)

const greenLog = function(...others: any) {
  console.log(chalk.green('[MC]:', ...others))
}

const redLog = function(...others: any) {
  console.log(chalk.red('[MC]:', ...others))
}

const blueLog = function(...others: any) {
  console.log(chalk.blue('[MC]:', ...others))
}

interface SystemInfo {
  cpuData: number
  memData: number
  netData: { inputMb: number, outputMb: number }
}

async function getSystemInfo() {
  return new Promise<SystemInfo>(async (resolve, reject) => {
    const cpuData = await cpu.usage()
    const memInfo = await mem.info()
    const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100)
    const netInfo = await netstat.inOut(1000)
    const netData = typeof netInfo === 'string' ? { inputMb: 0, outputMb: 0 } : netInfo.total

    resolve({
      cpuData,
      memData,
      netData
    })
  })
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    fp(3000, (err: any, freePort: number) => {
      if (err) {
        redLog('can not find free port')
        reject()
      }
      resolve(freePort)
    })
  })
}

async function getNodeProcess() {
  const { stdout, stderr } = await exec('ps aux | grep monitor_cube_start')
  if (stderr) {
    redLog('find node process error')
    return []
  }
  const pList = stdout
    .split('\n')
    .filter(i => !!i)
    .map(i => {
      const [USER, PID, CPU, MEM, VSZ, RSS, TTY, STAT, START, TIME, ...COMMAND] = i.split(' ').filter(s => !!s)
      return {
        pid: Number(PID),
        commandArr: COMMAND,
        command: COMMAND.join(' '),
      }
    }).filter(item =>
      item.commandArr[0] === 'node' && item.command.indexOf('monitor_cube_start') >= 0 && item.pid !== process.pid
    ).map(item => ({
      pid: item.pid,
      command: item.command,
      port: -1,
    }))
  for (const p of pList) {
    const { stdout, stderr } = await exec(`lsof -aPi -p ${p.pid} | awk 'NR != 1 { printf \"%s\", $9}'`)
    if (stderr) continue
    p.port = stdout ? Number(stdout.match(/\d+/)![0]) : -1
  }
  return pList
}

export async function startServer () {
  const pList = await getNodeProcess()
  if (pList.length !== 0) {
    blueLog(`has available server PID: ${pList[0].pid} PORT: ${pList[0].port}`)
    return
  }
  const port = await getFreePort()
  if (!port) return
  greenLog(`start server PID: ${process.pid} PORT: ${port}`)
  http.createServer(function (request, response) {
    const url = request.url
    if (url?.indexOf('/info') === 0){
      getSystemInfo().then(res => {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(JSON.stringify(res));
      })
    } else {
      response.end();
    }
  }).listen(port);
}

export async function stopServer () {
  greenLog('begin to stop server')
  const pList = await getNodeProcess()
  for (const p of pList) {
    blueLog(`begin to kill process: ${p.pid}`)
    await exec(`kill -9 ${p.pid}`)
  }
  greenLog('stop server success')
}

export async function showServer () {
  const pList = await getNodeProcess()
  if (pList.length === 0) {
    redLog('no available server')
    return
  }
  for (const p of pList) {
    blueLog(`available server PORT: ${p.port} PID: ${p.pid}`)
  }
}
