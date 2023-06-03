const axios = require("axios");

axios
  .get("http://app.scrapingbee.com/api/v1", {
    params: {
      api_key: "",
      url: "https://www.slugmag.com/category/community/",
    },
  })
  .then(function (response) {
    const News = response;
    console.log(News.data);
  });
