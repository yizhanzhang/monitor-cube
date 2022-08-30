"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blueLog = exports.redLog = exports.greenLog = void 0;
const chalk_1 = __importDefault(require("chalk"));
const greenLog = function (...others) {
    console.log(chalk_1.default.green('[MC]:', ...others));
};
exports.greenLog = greenLog;
const redLog = function (...others) {
    console.log(chalk_1.default.red('[MC]:', ...others));
};
exports.redLog = redLog;
const blueLog = function (...others) {
    console.log(chalk_1.default.blue('[MC]:', ...others));
};
exports.blueLog = blueLog;
