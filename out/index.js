#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const commander_1 = __importDefault(require("commander"));
const path_1 = __importDefault(require("path"));
const program = commander_1.default.program;
function execServer(command) {
    const serverPath = path_1.default.resolve(__dirname, './monitor_cube_server.js');
    (0, child_process_1.spawn)('node', [serverPath, command], { detached: true, stdio: ['inherit', 'inherit', 'inherit'] });
}
program
    .name('monitor-cube')
    .usage('mc start | mc stop | mc show')
    .description('A monitor in cube, powered by yizhanzhang')
    .version('1.0.0');
program.command('start')
    .description('start http server for monitor')
    .action(() => {
    execServer('start');
    process.exit(0);
});
program.command('stop')
    .description('stop http server for monitor')
    .action(() => {
    execServer('stop');
});
program.command('show')
    .description('show available http server for monitor')
    .action(() => {
    execServer('show');
});
program.parse();
