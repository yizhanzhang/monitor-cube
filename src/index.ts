import commander from 'commander'

import { showServer, startServer, stopServer } from './server'

const program = commander.program

program
  .name('monitor-cube')
  .description('A monitor in cube, powered by yizhanzhang')
  .version('1.0.0');

program.command('monitor_cube_start')
  .description('start http server for monitor')
  .option('-mc, --monitor_cube')
  .action(() => {
    startServer()
  })

program.command('monitor_cube_stop')
  .description('stop http server for monitor')
  .action(() => {
    stopServer()
  })

program.command('monitor_cube_show')
  .description('show available http server for monitor')
  .action(() => {
    showServer()
  })

program.parse()