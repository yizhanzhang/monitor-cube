import http from 'http';
import osu from 'node-os-utils';

const { cpu, mem, netstat } = osu

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
}).listen(33333);