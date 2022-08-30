import { SerialPort } from 'serialport'
import { cpu, mem } from 'node-os-utils'
import netInfoAvatar from './net_info_avatar'
import { greenLog } from './log'
import prompts from 'prompts';

class MySerialPort {
  private port?: SerialPort
  private open = false
  private interval?: NodeJS.Timer

  async initPort() {
    const pList = await SerialPort.list()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const response = await prompts<string>([{
      type: 'select',
      name: 'path',
      message: 'Matched Port:',
      choices: pList.map(item => ({ title: item.path, value: item.path })),
    },{
      type: 'number',
      name: 'baudRate',
      message: 'Matched baudRate:',
    }]);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    this.port = new SerialPort({ path: response.path, baudRate: Number(response.baudRate) })
    this.port.on('open', () => {
      greenLog('[PORT OPEN]', 'success')
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

  async loopHostInfo() {
    if (this.interval) return

    await this.initPort()
    this.interval = setInterval(() => {
      void this.pushHostInfo();
    }, 1000)
  }
}

export default new MySerialPort()
