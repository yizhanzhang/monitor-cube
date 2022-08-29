import { SerialPort } from 'serialport'
import { cpu, mem } from 'node-os-utils'
import netInfoAvatar from './net_info_avatar'

class MySerialPort {
  private port?: SerialPort
  private open = false
  private interval?: NodeJS.Timer

  constructor(path: string, baudRate: number) {
    this.port = new SerialPort({ path, baudRate })
    this.port.on('error', (err) => {
      console.log('[PORT ERROR]', err.message)
    })
    this.port.on('open', () => {
      console.log('[PORT OPEN]', 'success')
      this.open = true
    })
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

  loopHostInfo() {
    if (this.interval) return
    this.interval = setInterval(() => {
      void this.pushHostInfo();
    }, 1000)
  }
}

export default new MySerialPort('/dev/cu.usbserial-1440', 115200)
