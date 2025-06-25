const { chromium } = require('playwright');
const quoteScrapeController = async (req, res) => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://quotes.toscrape.com');
    console.log('✅ Page loaded');

    const quotes = [];

    // Get all .quote elements
    const quoteElements = await page.locator('.quote');
    const count = await quoteElements.count();

    for (let i = 0; i < count; i++) {
      const quoteEl = quoteElements.nth(i);
      const text = await quoteEl.locator('span.text').textContent();
      const author = await quoteEl.locator('span small.author').textContent();

      quotes.push({
        quote: text.trim(),
        author: author.trim()
      });
    }

    await browser.close();

    console.log(`✅ Scraped ${quotes.length} quotes`);
    res.json({ quotes });

  } catch (err) {
    console.error('❌ Scraping failed:', err.message);
    res.status(500).send('Error during scraping: ' + err.message);
  }
}

module.exports = {quoteScrapeController};