import { netstat, NetStatMetrics } from 'node-os-utils'

class NetInfoAvatar {
  private isAwake: boolean = false
  public info = { downloadData: '', uploadData: '' }
  public lastReecordTimestamp: number = 0
  public isStart: boolean = false
  public getTimeout: NodeJS.Timeout | undefined = undefined
  private sleepTime = Date.now();

  async getInfo() {
    if (!this.isAwake) {
      await this.updateInfo();
      this.isAwake = true;
      this.updateSleepTime();
      this.loopTimeout();
      return this.info;
    } else {
      this.updateSleepTime();
      return this.info
    }
  }

  async updateInfo() {
    const result = await netstat.inOut(1000)
    let downloadData = ''
    let uploadData = ''
    if (typeof result === 'string') {
      downloadData = "00.00M"
      uploadData = "00.00M"
    } else {
      downloadData = (result.total.inputMb).toFixed(2) + "M"
      uploadData = (result.total.outputMb).toFixed(2) + "M"
      if (downloadData.length < 6) downloadData = "0" + downloadData
      if (uploadData.length < 6) uploadData = "0" + uploadData
    }
    this.info = { downloadData, uploadData }
  }

  updateSleepTime() {
    this.sleepTime = Date.now() + 1000 * 5
  }

  loopTimeout() {
    setTimeout(async () => {
      if (Date.now() < this.sleepTime) {
        await this.updateInfo();
        this.loopTimeout();
      } else {
        this.isAwake = false;
      }
    }, 1000)
  }
}

const netInfoAvatar = new NetInfoAvatar()

export default netInfoAvatar
