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
const util_1 = __importDefault(require("util"));
const child_process_1 = __importDefault(require("child_process"));
const serial_port_1 = __importDefault(require("./serial_port"));
const log_1 = require("./log");
const exec = util_1.default.promisify(child_process_1.default.exec);
class MonitorCubeServer {
    static getNodeProcess() {
        return __awaiter(this, void 0, void 0, function* () {
            const { stdout, stderr } = yield exec('ps aux | grep monitor_cube_server');
            if (stderr) {
                (0, log_1.redLog)('find node process error');
                return [];
            }
            const pList = stdout
                .split('\n')
                .filter(i => !!i)
                .map(i => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [USER, PID, CPU, MEM, VSZ, RSS, TTY, STAT, START, TIME, ...COMMAND] = i.split(' ').filter(s => !!s);
                return {
                    pid: Number(PID),
                    commandArr: COMMAND,
                    command: COMMAND.join(' '),
                };
            }).filter(item => item.commandArr[0] === 'node' && item.command.indexOf('start') >= 0 && item.pid !== process.pid).map(item => ({
                pid: item.pid,
                command: item.command,
            }));
            return pList;
        });
    }
    // private static async getPuppeteerProcess() {
    // }
    static startServer() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // check available
            const pList = yield this.getNodeProcess();
            if (pList.length > 0) {
                yield this.showServer();
            }
            else {
                (0, log_1.greenLog)('begin to start server');
                yield serial_port_1.default.startLoop();
            }
            (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, 'over');
        });
    }
    static stopServer() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, log_1.greenLog)('begin to stop server');
            const pList = yield this.getNodeProcess();
            for (const p of pList) {
                (0, log_1.blueLog)(`begin to kill process: ${p.pid}`);
                yield exec(`kill -9 ${p.pid}`);
            }
            (0, log_1.greenLog)('stop server success');
        });
    }
    static showServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const pList = yield this.getNodeProcess();
            if (pList.length === 0) {
                (0, log_1.redLog)('no available server');
                return;
            }
            for (const p of pList) {
                (0, log_1.blueLog)(`available server PID:${p.pid}`);
            }
        });
    }
    static exec(type) {
        switch (type) {
            case 'start':
                void this.startServer();
                break;
            case 'stop':
                void this.stopServer();
                break;
            case 'show':
                void this.showServer();
                break;
            default:
                break;
        }
    }
}
const type = process.argv[2];
MonitorCubeServer.exec(type);
