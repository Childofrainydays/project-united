// Dependencies
const axios = require("axios");
const cheerio = require("cheerio");

// Initial basic set-up for optional second site to scrape (in case)
axios
  .get("http://app.scrapingbee.com/api/v1", {
    params: {
      api_key: "0BTE3F88UR9Y2VPX081XHVPTP29JONJAW9J6UXU7SKGLXH10VU2H98L7GEYEQWTX120029G8S9VG9X8O",
      // The target webpage :
      url: "https://www.ksl.com/news/stream/multicultural-utah",
    },
  })