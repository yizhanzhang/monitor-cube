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
const http_1 = __importDefault(require("http"));
const node_os_utils_1 = __importDefault(require("node-os-utils"));
const { cpu, mem, netstat } = node_os_utils_1.default;
function getSystemInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const cpuData = yield cpu.usage();
            const memInfo = yield mem.info();
            const memData = Math.round(memInfo.usedMemMb / memInfo.totalMemMb * 100);
            const netInfo = yield netstat.inOut(1000);
            const netData = typeof netInfo === 'string' ? { inputMb: 0, outputMb: 0 } : netInfo.total;
            resolve({
                cpuData,
                memData,
                netData
            });
        }));
    });
}
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
}).listen(33333);
