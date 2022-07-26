import commander from 'commander'

import { startServer, stopServer } from './server'

const program = commander.program

program
  .name('monitor-cube')
  .description('A monitor in cube, powered by yizhanzhang')
  .version('1.0.0');

program.command('start')
  .description('start http server for monitor')
  .option('-p, --port <number>', 'http port to use, default is 33333', '33333')
  .action((options) => {
    startServer(Number(options.port))
  })

program.command('stop')
  .description('stop http server for monitor')
  .action(() => {
    stopServer()
  })

program.parse()