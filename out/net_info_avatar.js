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
Object.defineProperty(exports, "__esModule", { value: true });
const node_os_utils_1 = require("node-os-utils");
class NetInfoAvatar {
    constructor() {
        this.isAwake = false;
        this.sleepTime = Date.now();
        this.info = { downloadData: '', uploadData: '' };
        this.lastReecordTimestamp = 0;
        this.isStart = false;
        this.getTimeout = undefined;
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isAwake) {
                yield this.updateInfo();
                this.isAwake = true;
                this.updateSleepTime();
                this.loopTimeout();
                return this.info;
            }
            else {
                this.updateSleepTime();
                return this.info;
            }
        });
    }
    updateInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield node_os_utils_1.netstat.inOut(1000);
            let downloadData = '';
            let uploadData = '';
            if (typeof result === 'string') {
                downloadData = "00.00M";
                uploadData = "00.00M";
            }
            else {
                downloadData = (result.total.inputMb).toFixed(2) + "M";
                uploadData = (result.total.outputMb).toFixed(2) + "M";
                if (downloadData.length < 6)
                    downloadData = "0" + downloadData;
                if (uploadData.length < 6)
                    uploadData = "0" + uploadData;
            }
            this.info = { downloadData, uploadData };
        });
    }
    updateSleepTime() {
        this.sleepTime = Date.now() + 1000 * 5;
    }
    loopTimeout() {
        setTimeout(() => {
            if (Date.now() < this.sleepTime) {
                this.updateInfo().then(() => {
                    this.loopTimeout();
                }).catch(() => {
                    console.log('LOOP ERROR');
                });
            }
            else {
                this.isAwake = false;
            }
        }, 1000);
    }
}
const netInfoAvatar = new NetInfoAvatar();
exports.default = netInfoAvatar;
