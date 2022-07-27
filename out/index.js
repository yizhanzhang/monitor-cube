#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const server_1 = require("./server");
const program = commander_1.default.program;
program
    .name('monitor-cube')
    .description('A monitor in cube, powered by yizhanzhang')
    .version('1.0.0');
program.command('monitor_cube_start')
    .description('start http server for monitor')
    .option('-mc, --monitor_cube')
    .action(() => {
    (0, server_1.startServer)();
});
program.command('monitor_cube_stop')
    .description('stop http server for monitor')
    .action(() => {
    (0, server_1.stopServer)();
});
program.command('monitor_cube_show')
    .description('show available http server for monitor')
    .action(() => {
    (0, server_1.showServer)();
});
program.parse();
