import { SerialPort } from 'serialport'
import { cpu, mem } from 'node-os-utils'
import netInfoAvatar from './net_info_avatar'
import { greenLog, redLog } from './log'

const BAUD_RATE = 115200
const CH340_DEVICE = {
  vendorId: '1a86',
  productId: '7523'
}

class MySerialPort {
  private port?: SerialPort
  private open = false
  private interval?: NodeJS.Timer

  async initPort() {
    const pList = await SerialPort.list()
    const targetPort = pList.find(item => item.vendorId === CH340_DEVICE.vendorId && item.productId === CH340_DEVICE.productId)
    if (!targetPort) {
      redLog('find no targetPort for CH340')
      return false
    }

    this.port = new SerialPort({ path: targetPort.path, baudRate: BAUD_RATE })
    this.port.on('open', () => {
      greenLog('port open success: ' + targetPort.path)
      this.open = true
    })
    return true
  }

  async pushHostInfo() {
    if (!this.port || !this.open) return

    const cpuData = parseInt((await cpu.usage()).toFixed(0))
    const memInfo = await mem.info()
    const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100)
    const { downloadData, uploadData } = await netInfoAvatar.getInfo()
    const result = {
      cpuData,
      memData,
      downloadData,
      uploadData,
    }

    this.port.write(JSON.stringify(result))
  }

  async startLoop() {
    if (this.interval) return

    const inited = await this.initPort()
    if (!inited) return

    this.interval = setInterval(() => {
      void this.pushHostInfo();
    }, 1000)
  }
}

export default new MySerialPort()
