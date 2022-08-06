import http from 'http'
import chalk from 'chalk'
import util from 'util'
import cp from 'child_process'
import { networkInterfaces } from 'os'
import { cpu, mem, netstat, NetStatMetrics } from 'node-os-utils'

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
  downloadData: string
  uploadData: string
}

class NetInfoAvatar {
  public lastRecord: NetStatMetrics | string = ""
  public lastReecordTimestamp: number = 0
  public isStart: boolean = false
  public getTimeout: NodeJS.Timeout | undefined = undefined
  public cancelTimeout: NodeJS.Timeout | undefined = undefined

  async getRecord() {
    if (!this.isStart) {
      this.isStart = true
      this.addTimeout()
      this.startCancelTimeout()
      return this.getCore()
    } else {
      this.startCancelTimeout()
      return this.lastRecord
    }
  }

  async getCore() {
    const result = await netstat.inOut(100)
    this.lastRecord = result
    this.lastReecordTimestamp = Date.now()
    return result
  }

  addTimeout() {
    if (this.getTimeout) {
      clearTimeout(this.getTimeout)
    }
    this.getTimeout = setTimeout(() => {
      this.getTimeout = undefined
      if (this.isStart) {
        this.getCore()
        this.addTimeout()
      }
    }, 500)
  }

  startCancelTimeout() {
    if (this.cancelTimeout) {
      clearTimeout(this.cancelTimeout)
    }
    this.cancelTimeout = setTimeout(() => {
      this.isStart = false
      this.cancelTimeout = undefined
    }, 5000)
  }
}

const netInfoAvatar = new NetInfoAvatar()

async function getSystemInfo() {
  return new Promise<SystemInfo>(async (resolve, reject) => {
    const cpuData = parseInt((await cpu.usage()).toFixed(0))
    const memInfo = await mem.info()
    const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100)
    const netInfo = await netInfoAvatar.getRecord()
    let downloadData = ""
    let uploadData = ""
    if (typeof netInfo === 'string') {
      downloadData = "00.00M"
      uploadData = "00.00M"
    } else {
      downloadData = (netInfo.total.inputMb * 10).toFixed(2) + "M"
      uploadData = (netInfo.total.outputMb * 10).toFixed(2) + "M"
      if (downloadData.length < 6) downloadData = "0" + downloadData
      if (uploadData.length < 6) uploadData = "0" + uploadData
    }

    resolve({
      cpuData,
      memData,
      downloadData,
      uploadData,
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

function getLocalIP() {
  const nets = networkInterfaces();
  const address: string[] = [];
  for (const name in nets) {
    const netGroup = nets[name]
    if (!netGroup || name.indexOf('en') !== 0) continue
    netGroup.forEach(net => {
      if (net.family === 'IPv4' && !net.internal) {
        address.push(net.address)
      }
    })
  }
  return address
}

async function getNodeProcess() {
  const { stdout, stderr } = await exec('ps aux | grep monitor_cube_server.js')
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
      item.commandArr[0] === 'node' && item.command.indexOf('start') >= 0 && item.pid !== process.pid
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

async function startServer () {
  const IP = getLocalIP()
  const pList = await getNodeProcess()
  if (pList.length !== 0) {
    blueLog(`has available server NET:[${IP}:${pList[0].port}] PID:${pList[0].pid}`)
    return
  }
  const port = await getFreePort()
  if (!port) return
  greenLog('[welcome to monitor cube]')
  greenLog(`local ip: ${IP.join(' | ')}`)
  greenLog(`start server PORT:${port} PID:${process.pid}`)
  http.createServer(function (request, response) {
    const url = request.url
    if (url?.indexOf('/info') === 0){
      getSystemInfo().then(res => {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(JSON.stringify(res));
      })
    } else {
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('this is monitorCube');
    }
  }).listen(port);
}

async function stopServer () {
  greenLog('begin to stop server')
  const pList = await getNodeProcess()
  for (const p of pList) {
    blueLog(`begin to kill process: ${p.pid}`)
    await exec(`kill -9 ${p.pid}`)
  }
  greenLog('stop server success')
}

async function showServer () {
  const pList = await getNodeProcess()
  if (pList.length === 0) {
    redLog('no available server')
    return
  }
  
  const IP = getLocalIP()
  blueLog(`local ip: ${IP.join(' | ')}`)
  for (const p of pList) {
    blueLog(`available server PORT:${p.port} PID:${p.pid}`)
  }
}

const type = process.argv[2]
switch (type) {
  case 'start':
    startServer()
    break
  case 'stop':
    stopServer()
    break
  case 'show':
    showServer()
    break
  default:
    break
}
