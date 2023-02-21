import puppeteer, { Browser, Page } from 'puppeteer';

const stockInfo = {
  timeStamp: 0,
  status: 0,
  price: '',
}
let browser: Browser | undefined;
let page: Page | undefined;
async function initPuppeteer() {
  browser = await puppeteer.launch({ headless: false, devtools: true });
  page = await browser.newPage();
  await page.goto('https://www.futunn.com/hk/stock/00700-HK');
  page.on('response', (response) => {
    const url = response.url().toString();
    if (url.indexOf('/get-stock-info') === -1) return;
    void response.text().then((text: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: { data: { change: string, price: string } } = JSON.parse(text);
      stockInfo.timeStamp = Date.now();
      stockInfo.status = Number(data.data.change) === 0 ? 0 : (Number(data.data.change) > 0 ? 1 : -1);
      stockInfo.price = data.data.price.substring(0, 5);
    })
  });
}

class StockAvatar {
  async getInfo() {
    if (!page) await initPuppeteer();
    // 每60s更新一次价格
    if (Date.now() - stockInfo.timeStamp > 1000 * 60) {
      const refreshBtn = await page?.waitForSelector('.stock-refresh');
      void refreshBtn?.click();
    }
    return { stockStatus: stockInfo.status, stockData: stockInfo.price };
  }
}

export default new StockAvatar();