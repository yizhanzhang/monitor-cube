"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showServer = exports.stopServer = exports.startServer = void 0;
const http_1 = __importDefault(require("http"));
const chalk_1 = __importDefault(require("chalk"));
const util_1 = __importDefault(require("util"));
const child_process_1 = __importDefault(require("child_process"));
const node_os_utils_1 = require("node-os-utils");
const fp = require("find-free-port");
const exec = util_1.default.promisify(child_process_1.default.exec);
const greenLog = function (...others) {
    console.log(chalk_1.default.green('[MC]:', ...others));
};
const redLog = function (...others) {
    console.log(chalk_1.default.red('[MC]:', ...others));
};
const blueLog = function (...others) {
    console.log(chalk_1.default.blue('[MC]:', ...others));
};
function getSystemInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const cpuData = yield node_os_utils_1.cpu.usage();
            const memInfo = yield node_os_utils_1.mem.info();
            const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100);
            const netInfo = yield node_os_utils_1.netstat.inOut(1000);
            const netData = typeof netInfo === 'string' ? { inputMb: 0, outputMb: 0 } : netInfo.total;
            resolve({
                cpuData,
                memData,
                netData
            });
        }));
    });
}
function getFreePort() {
    return new Promise((resolve, reject) => {
        fp(3000, (err, freePort) => {
            if (err) {
                redLog('can not find free port');
                reject();
            }
            resolve(freePort);
        });
    });
}
function getNodeProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const { stdout, stderr } = yield exec('ps aux | grep monitor_cube_start');
        if (stderr) {
            redLog('find node process error');
            return [];
        }
        const pList = stdout
            .split('\n')
            .filter(i => !!i)
            .map(i => {
            const [USER, PID, CPU, MEM, VSZ, RSS, TTY, STAT, START, TIME, ...COMMAND] = i.split(' ').filter(s => !!s);
            return {
                pid: Number(PID),
                commandArr: COMMAND,
                command: COMMAND.join(' '),
            };
        }).filter(item => item.commandArr[0] === 'node' && item.command.indexOf('monitor_cube_start') >= 0 && item.pid !== process.pid).map(item => ({
            pid: item.pid,
            command: item.command,
            port: -1,
        }));
        for (const p of pList) {
            const { stdout, stderr } = yield exec(`lsof -aPi -p ${p.pid} | awk 'NR != 1 { printf \"%s\", $9}'`);
            if (stderr)
                continue;
            p.port = stdout ? Number(stdout.match(/\d+/)[0]) : -1;
        }
        return pList;
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const pList = yield getNodeProcess();
        if (pList.length !== 0) {
            blueLog(`has available server PID: ${pList[0].pid} PORT: ${pList[0].port}`);
            return;
        }
        const port = yield getFreePort();
        if (!port)
            return;
        greenLog(`start server PID: ${process.pid} PORT: ${port}`);
        http_1.default.createServer(function (request, response) {
            const url = request.url;
            if ((url === null || url === void 0 ? void 0 : url.indexOf('/info')) === 0) {
                getSystemInfo().then(res => {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end(JSON.stringify(res));
                });
            }
            else {
                response.end();
            }
        }).listen(port);
    });
}
exports.startServer = startServer;
function stopServer() {
    return __awaiter(this, void 0, void 0, function* () {
        greenLog('begin to stop server');
        const pList = yield getNodeProcess();
        for (const p of pList) {
            blueLog(`begin to kill process: ${p.pid}`);
            yield exec(`kill -9 ${p.pid}`);
        }
        greenLog('stop server success');
    });
}
exports.stopServer = stopServer;
function showServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const pList = yield getNodeProcess();
        if (pList.length === 0) {
            redLog('no available server');
            return;
        }
        for (const p of pList) {
            blueLog(`available server PORT: ${p.port} PID: ${p.pid}`);
        }
    });
}
exports.showServer = showServer;
