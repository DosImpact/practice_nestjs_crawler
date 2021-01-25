import { Injectable } from '@nestjs/common';
import path from 'path';
import pt, { PuppeteerExtra } from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Browser } from 'puppeteer-extra/dist/puppeteer';

@Injectable()
export class PuppeteerService {
  constructor(private browser: Browser) {
    // this.initBrowser();
  }

  // init brs instance
  async initBrowser() {
    pt.use(StealthPlugin());
    this.browser = await pt.launch({
      headless: false,
      // userDataDir: `${path.join(__dirname, "../../", "User Data")}`,
      args: [
        '--no-sandbox',
        `--window-size=${process.env.BRS_WIDTH},${process.env.BRS_HEIGHT}`,
        '--disable-notifications',
      ],
    });
    console.log('✔ puppeteer is running');
  }

  // launch new tabs - id

  // get command

  // close new tabs - id

  // close brs instance
}
