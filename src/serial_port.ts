import { SerialPort } from 'serialport'
import { PortInfo } from "@serialport/bindings-cpp"
import { cpu, mem } from 'node-os-utils'
import netInfoAvatar from './net_info_avatar'
import stockAvatar from './stock_avatar'
import { greenLog, redLog } from './log'

const BAUD_RATE = 115200
const CH340_DEVICE = {
  vendorId: '1a86',
  productId: '7523'
}

class MySerialPort {
  private port?: SerialPort
  private open = false
  private intervalFlag = false

  async initPort() {
    const pList: PortInfo[] = await SerialPort.list()
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
    const { stockStatus, stockData } = await stockAvatar.getInfo()
    const result = {
      cpuData,
      memData,
      downloadData,
      uploadData,
      stockStatus,
      stockData,
    }

    this.port.write(JSON.stringify(result))
  }

  async startLoop() {
    const inited = await this.initPort()
    if (!inited) return

    setInterval(() => {
      void (async () => {
        if (this.intervalFlag) return;
        this.intervalFlag = true
        await this.pushHostInfo();
        this.intervalFlag = false;
      })()
    }, 1000)
  }
}

export default new MySerialPort()
