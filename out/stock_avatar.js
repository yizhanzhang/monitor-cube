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
const puppeteer_1 = __importDefault(require("puppeteer"));
const stockInfo = {
    timeStamp: 0,
    status: 0,
    price: '',
};
let browser;
let page;
function initPuppeteer() {
    return __awaiter(this, void 0, void 0, function* () {
        browser = yield puppeteer_1.default.launch({ headless: false, devtools: true });
        page = yield browser.newPage();
        yield page.goto('https://www.futunn.com/hk/stock/00700-HK');
        page.on('response', (response) => {
            const url = response.url().toString();
            if (url.indexOf('/get-stock-info') === -1)
                return;
            void response.text().then((text) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const data = JSON.parse(text);
                stockInfo.timeStamp = Date.now();
                stockInfo.status = Number(data.data.change) === 0 ? 0 : (Number(data.data.change) > 0 ? 1 : -1);
                stockInfo.price = data.data.price.substring(0, 5);
            });
        });
    });
}
class StockAvatar {
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!page)
                yield initPuppeteer();
            // 每60s更新一次价格
            if (Date.now() - stockInfo.timeStamp > 1000 * 60) {
                const refreshBtn = yield (page === null || page === void 0 ? void 0 : page.waitForSelector('.stock-refresh'));
                void (refreshBtn === null || refreshBtn === void 0 ? void 0 : refreshBtn.click());
            }
            return { stockStatus: stockInfo.status, stockData: stockInfo.price };
        });
    }
}
exports.default = new StockAvatar();
