const { chromium } = require('playwright');

const scrapemeProductScrapeController = async (req, res) => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://scrapeme.live/shop/');
    console.log('✅ Page loaded');

    const products = [];
    const productItems = page.locator('.product');
    const count = await productItems.count();

    for (let i = 0; i < count; i++) {
      const product = productItems.nth(i);
      const title = await product.locator('h2').textContent();
      const price = await product.locator('.price').textContent();

      products.push({ title: title.trim(), price: price.trim() });
    }

    await browser.close();
    res.json({ products });
  } catch (err) {
    console.error('❌ Product scraping failed:', err.message);
    res.status(500).send('Error during scraping: ' + err.message);
  }
};

module.exports = { scrapemeProductScrapeController };
