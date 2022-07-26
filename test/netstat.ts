import osu from 'node-os-utils';

osu.netstat.stats()

const isNetStatMetrics = (item: string | osu.NetStatMetrics): item is osu.NetStatMetrics => {
  return typeof item !== 'string'
}

const fn = function () {
  osu.netstat.inOut(1000).then(res => {
    if (isNetStatMetrics(res)) {
      console.log(res)
    }
    setTimeout(fn, 1000)
  })
}

fn()