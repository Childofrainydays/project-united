const axios = require("axios");

axios
  .get("http://app.scrapingbee.com/api/v1", {
    params: {
      api_key:
        "TIO7SISJT4XBKE803L8PJ7YLBOGJXCSC7SF2WPNTPD7MR94WQAFQ13GU897Z0WZALXQH1ASCGB5GIH6L",
      url: "https://www.slugmag.com/category/community/",
    },
  })
  .then(function (response) {
    const News = response;
    console.log(News.data);
  });
