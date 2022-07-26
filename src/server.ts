import http from 'http';
import { cpu, mem, netstat } from 'node-os-utils';
import chalk from 'chalk';

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

export function startServer (port: number) {
  greenLog(`启动http服务 端口: ${port} PID: ${process.pid}`)
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

export function stopServer () {

}
