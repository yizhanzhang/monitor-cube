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
const serialport_1 = require("serialport");
const node_os_utils_1 = require("node-os-utils");
const net_info_avatar_1 = __importDefault(require("./net_info_avatar"));
const log_1 = require("./log");
const prompts_1 = __importDefault(require("prompts"));
const BAUD_RATE = 115200;
class MySerialPort {
    constructor() {
        this.open = false;
    }
    initPort() {
        return __awaiter(this, void 0, void 0, function* () {
            const pList = yield serialport_1.SerialPort.list();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
            const response = yield (0, prompts_1.default)([{
                    type: 'select',
                    name: 'path',
                    message: 'Matched Port:',
                    choices: pList.map(item => ({ title: item.path, value: item.path })),
                }]);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            this.port = new serialport_1.SerialPort({ path: response.path, baudRate: BAUD_RATE });
            this.port.on('open', () => {
                (0, log_1.greenLog)('port open success');
                this.open = true;
            });
        });
    }
    pushHostInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.port || !this.open)
                return;
            const cpuData = parseInt((yield node_os_utils_1.cpu.usage()).toFixed(0));
            const memInfo = yield node_os_utils_1.mem.info();
            const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100);
            const { downloadData, uploadData } = yield net_info_avatar_1.default.getInfo();
            const result = {
                cpuData,
                memData,
                downloadData,
                uploadData,
            };
            this.port.write(JSON.stringify(result));
        });
    }
    loopHostInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.interval)
                return;
            yield this.initPort();
            this.interval = setInterval(() => {
                void this.pushHostInfo();
            }, 1000);
        });
    }
}
exports.default = new MySerialPort();
