const express = require('express');
const router = express.Router();
const {quoteScrapeController} = require("../controller/quotescraping.controller");
const {bookScrapeController} = require("../controller/booksscraping.controller");
const {httpbinScrapeController} = require("../controller/httpbinScrapeController");
const {scrapemeProductScrapeController} = require("../controller/scrapemeProductScrapeController")
router.get("/quote", quoteScrapeController);
router.get("/books", bookScrapeController);
router.get("/httpbin", httpbinScrapeController);
router.get("/product", scrapemeProductScrapeController);

module.exports = router;

