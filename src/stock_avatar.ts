/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import request from 'superagent';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36';

const config = {
  id: 54047868453564,
  name: "TENCENT"
}

class StockAvatar {
  private csrfToken = ''
  private cookie: Array<string> = []
  private timeStamp = 0
  private stockInfo = { status: 0, price: '' }

  async getCookieAndCsrf() {
    const res = await request.get('https://www.futunn.com/hk/stock/00700-HK').set({
      'User-Agent': UA
    });
    this.csrfToken = res.text.match(/<meta\s?name="csrf-token"\s?content="([^"]+)"/)?.[1] || '';
    this.cookie = res.header['set-cookie'];
  }

  async getInfo() {
    if (Date.now() - this.timeStamp < 1000 * 60) return { stockStatus: this.stockInfo.status, stockName: config.name, stockData: this.stockInfo.price }
  
    this.timeStamp = Date.now()
    if (!this.cookie || !this.csrfToken) await this.getCookieAndCsrf();
    const res = await request.get(`https://www.futunn.com/quote-api/get-stock-info?stock_id=${config.id}&market_type=1&market_code=1&instrument_type=3&lot_size=100`).set({
      'User-Agent': UA,
      'futu-x-csrf-token': this.csrfToken,
      'Cookie': this.cookie.join(';')
    });
    if (!res.ok) {
      this.csrfToken = ''
      this.cookie = []
      this.stockInfo.price = ''
      this.stockInfo.status = 0
    } else {
      const data = JSON.parse(res.text);
      this.stockInfo.price = data.data.price.substring(0, 5);
      const change = Number(data.data.change);
      if (change === 0) {
        this.stockInfo.status = 0
      } else if (change > 0) {
        this.stockInfo.status = 1
      } else {
        this.stockInfo.status = 2
      }
    }
    return { stockStatus: this.stockInfo.status, stockName: config.name, stockData: this.stockInfo.price }
  }
}

export default new StockAvatar();