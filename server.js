const express = require('express');
const {quoteScrapeController} = require('./controller/quotescraping.controller');
const app = express();
const scrapeRotues = require("./routes/scrapeRoutes");
const PORT = 7000;

app.get('/', (req, res)=> {
    res.send("App started successfully");
});
app.use('/scrape', scrapeRotues)

app.listen(PORT, () => {
  console.log(`🚀 Server Started on http://localhost:${PORT}`);
});
