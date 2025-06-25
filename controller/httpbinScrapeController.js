const { chromium } = require('playwright');

const httpbinScrapeController = async (req, res) => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://httpbin.org/html');
    console.log('✅ Page loaded');

    const title = await page.locator('h1').textContent();

    await browser.close();
    res.json({ title: title.trim() });
  } catch (err) {
    console.error('❌ httpbin scraping failed:', err.message);
    res.status(500).send('Error during scraping: ' + err.message);
  }
};

module.exports = { httpbinScrapeController };
