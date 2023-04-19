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
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
const superagent_1 = __importDefault(require("superagent"));
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';
const config = {
    id: 54047868453564,
    name: "TENCENT"
};
class StockAvatar {
    constructor() {
        this.csrfToken = '';
        this.cookie = [];
        this.timeStamp = 0;
        this.stockInfo = { status: 0, price: '' };
    }
    getCookieAndCsrf() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield superagent_1.default.get('https://www.futunn.com/hk/stock/00700-HK').set({
                'User-Agent': UA
            });
            this.csrfToken = ((_a = res.text.match(/<meta\s?name="csrf-token"\s?content="([^"]+)"/)) === null || _a === void 0 ? void 0 : _a[1]) || '';
            this.cookie = res.header['set-cookie'];
        });
    }
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Date.now() - this.timeStamp < 1000 * 60)
                return { stockStatus: this.stockInfo.status, stockData: this.stockInfo.price };
            this.timeStamp = Date.now();
            if (!this.cookie || !this.csrfToken)
                yield this.getCookieAndCsrf();
            const res = yield superagent_1.default.get(`https://www.futunn.com/quote-api/get-stock-info?stock_id=${config.id}&market_type=1&market_code=1&instrument_type=3&lot_size=100`).set({
                'User-Agent': UA,
                'futu-x-csrf-token': this.csrfToken,
                'Cookie': this.cookie.join(';')
            });
            if (!res.ok) {
                this.csrfToken = '';
                this.cookie = [];
                this.stockInfo.price = '';
                this.stockInfo.status = 0;
            }
            else {
                const data = JSON.parse(res.text);
                this.stockInfo.price = data.data.price.substring(0, 5);
                const change = Number(data.data.change);
                if (change === 0) {
                    this.stockInfo.status = 0;
                }
                else if (change > 0) {
                    this.stockInfo.status = 1;
                }
                else {
                    this.stockInfo.status = 2;
                }
            }
            return { stockStatus: this.stockInfo.status, stockName: config.name, stockData: this.stockInfo.price };
        });
    }
}
exports.default = new StockAvatar();
