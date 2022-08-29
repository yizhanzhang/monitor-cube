import chalk from 'chalk'
import util from 'util'
import cp from 'child_process'
import mySerialPort from './serial_port'

const exec = util.promisify(cp.exec)

const greenLog = function(...others: string[]) {
  console.log(chalk.green('[MC]:', ...others))
}

const redLog = function(...others: string[]) {
  console.log(chalk.red('[MC]:', ...others))
}

const blueLog = function(...others: string[]) {
  console.log(chalk.blue('[MC]:', ...others))
}

async function getNodeProcess() {
  const { stdout, stderr } = await exec('ps aux | grep monitor_cube_server')
  if (stderr) {
    redLog('find node process error')
    return []
  }
  const pList = stdout
    .split('\n')
    .filter(i => !!i)
    .map(i => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // eslint-disable-next-line no-useless-escape
    const { stdout, stderr } = await exec(`lsof -aPi -p ${p.pid} | awk 'NR != 1 { printf "%s", $9}'`)
    if (stderr) continue
    p.port = stdout ? Number(stdout.match(/\d+/)?.[0]) : -1
  }
  return pList
}

function startServer () {
  greenLog('begin to start server')
  mySerialPort.loopHostInfo()
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

  for (const p of pList) {
    blueLog(`available server PID:${p.pid}`)
  }
}

const type = process.argv[2]

switch (type) {
  case 'start':
    void startServer()
    break
  case 'stop':
    void stopServer()
    break
  case 'show':
    void showServer()
    break
  default:
    break
}
