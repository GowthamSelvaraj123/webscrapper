# 🌐 Web Scraping API with Playwright + Node.js

This project is a demo web scraping API built using [Playwright](https://playwright.dev/) and [Express.js](https://expressjs.com/). It scrapes data from **five publicly available websites** that are safe and legal for practice.

---

## 🔥 Features

- ✅ Quotes scraper from `quotes.toscrape.com`
- ✅ Book title & price scraper from `books.toscrape.com`
- ✅ HTML test scraping from `httpbin.org`
- ✅ Product scraper from `scrapeme.live/shop/`

---

## 🧠 REST API Structure (Educational Purpose)

This project also demonstrates how to organize and expose **RESTful API routes** in a backend using Express.js. It follows a basic REST pattern:

- `GET` method for fetching scraped data
- Separation of concerns using **routes** and **controllers**
- Clean modular design suitable for scaling into larger applications

### 🗂 Routes

| Route            | Description                              |
|------------------|------------------------------------------|
| `/quote`         | Fetch quotes and authors                 |
| `/books`         | Fetch list of books with price           |
| `/httpbin`       | Fetch title from basic static HTML       |
| `/product`       | Fetch product list from fake shop        |

Each route is handled by a separate **controller** in `controller/` folder.

---

## 🚀 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/your-username/playwright-scraping-api.git
cd playwright-scraping-api
