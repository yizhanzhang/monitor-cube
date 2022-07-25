import http from 'http';
import osu from 'node-os-utils';

const { cpu, mem } = osu

interface SystemInfo {
  cpuData: number
  memData: number
}

async function getSystemInfo() {
  return new Promise<SystemInfo>(async (resolve, reject) => {
    const result = {
      cpu: 0,
      mem: 0
    }
    const cpuData = await cpu.usage()
    const memInfo = await mem.info()
    const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100)

    resolve({
      cpuData,
      memData
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