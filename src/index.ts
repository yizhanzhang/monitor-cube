#!/usr/bin/env node
import { spawn } from 'child_process'
import commander from 'commander'
import path from 'path'

const program = commander.program

function execServer(command: string) {
  const serverPath = path.resolve(__dirname, './monitor_cube_server.js')
  spawn('node', [serverPath, command], { detached: true, stdio: ['inherit', 'inherit', 'inherit']  })
}

program
  .name('monitor-cube')
  .usage('mc start | mc stop | mc show')
  .description('A monitor in cube, powered by yizhanzhang')
  .version('1.0.0')

program.command('start')
  .description('start http server for monitor')
  .action(() => {
    execServer('start')
    console.log('[MC]:front task will close after 10s')
    setTimeout(() => {
      process.exit(0)
    }, 10000)
  })

program.command('stop')
  .description('stop http server for monitor')
  .action(() => {
    execServer('stop')
  })

program.command('show')
  .description('show available http server for monitor')
  .action(() => {
    execServer('show')
  })

program.parse()