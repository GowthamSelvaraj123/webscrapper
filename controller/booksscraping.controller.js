const { chromium } = require('playwright');

const bookScrapeController = async (req, res) => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://books.toscrape.com');
    console.log('✅ Page loaded');

    const books = [];
    const bookElements = page.locator('.product_pod');
    const count = await bookElements.count();

    for (let i = 0; i < count; i++) {
      const book = bookElements.nth(i);
      const title = await book.locator('h3 a').getAttribute('title');
      const price = await book.locator('.price_color').textContent();

      books.push({ title: title.trim(), price: price.trim() });
    }

    await browser.close();
    console.log(`✅ Scraped ${books.length} books`);
    res.json({ books });
  } catch (err) {
    console.error('❌ Book scraping failed:', err.message);
    res.status(500).send('Error during scraping: ' + err.message);
  }
};

module.exports = { bookScrapeController };
