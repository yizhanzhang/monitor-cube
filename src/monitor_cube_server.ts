import util from 'util'
import cp from 'child_process'
import mySerialPort from './serial_port'
import { greenLog, redLog, blueLog } from './log'

const exec = util.promisify(cp.exec)

class MonitorCubeServer {
  private static async getNodeProcess() {
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
      }))
    return pList
  }

  // private static async getPuppeteerProcess() {

  // }

  private static async startServer () {
    // check available
    const pList = await this.getNodeProcess()
    if (pList.length > 0) {
      await this.showServer()
    } else {
      greenLog('begin to start server')
      await mySerialPort.startLoop();
    }
    process.send?.('over');
  }

  private static async stopServer () {
    greenLog('begin to stop server')
    const pList = await this.getNodeProcess()
    for (const p of pList) {
      blueLog(`begin to kill process: ${p.pid}`)
      await exec(`kill -9 ${p.pid}`)
    }
    greenLog('stop server success')
  }
  
  private static async showServer () {
    const pList = await this.getNodeProcess()
    if (pList.length === 0) {
      redLog('no available server')
      return
    }
  
    for (const p of pList) {
      blueLog(`available server PID:${p.pid}`)
    }
  }

  public static exec(type: string) {
    switch (type) {
      case 'start':
        void this.startServer()
        break
      case 'stop':
        void this.stopServer()
        break
      case 'show':
        void this.showServer()
        break
      default:
        break
    }
  }
}

const type = process.argv[2]
MonitorCubeServer.exec(type)
