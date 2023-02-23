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
const stock_avatar_1 = __importDefault(require("./stock_avatar"));
const log_1 = require("./log");
const BAUD_RATE = 115200;
const CH340_DEVICE = {
    vendorId: '1a86',
    productId: '7523'
};
class MySerialPort {
    constructor() {
        this.open = false;
        this.intervalFlag = false;
    }
    initPort() {
        return __awaiter(this, void 0, void 0, function* () {
            const pList = yield serialport_1.SerialPort.list();
            const targetPort = pList.find(item => item.vendorId === CH340_DEVICE.vendorId && item.productId === CH340_DEVICE.productId);
            if (!targetPort) {
                (0, log_1.redLog)('find no targetPort for CH340');
                return false;
            }
            this.port = new serialport_1.SerialPort({ path: targetPort.path, baudRate: BAUD_RATE });
            this.port.on('open', () => {
                (0, log_1.greenLog)('port open success: ' + targetPort.path);
                this.open = true;
            });
            return true;
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
            const { stockStatus, stockData } = yield stock_avatar_1.default.getInfo();
            const result = {
                cpuData,
                memData,
                downloadData,
                uploadData,
                stockStatus,
                stockData,
            };
            this.port.write(JSON.stringify(result));
        });
    }
    startLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            const inited = yield this.initPort();
            if (!inited)
                return;
            setInterval(() => {
                void (() => __awaiter(this, void 0, void 0, function* () {
                    if (this.intervalFlag)
                        return;
                    this.intervalFlag = true;
                    yield this.pushHostInfo();
                    this.intervalFlag = false;
                }))();
            }, 1000);
        });
    }
}
exports.default = new MySerialPort();
