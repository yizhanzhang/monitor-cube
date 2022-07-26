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
exports.stopServer = exports.startServer = void 0;
const http_1 = __importDefault(require("http"));
const node_os_utils_1 = require("node-os-utils");
const chalk_1 = __importDefault(require("chalk"));
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
function startServer(port) {
    greenLog(`启动http服务 端口: ${port} PID: ${process.pid}`);
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
}
exports.startServer = startServer;
function stopServer() {
}
exports.stopServer = stopServer;
