// Dependencies
const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("http://app.scrapingbee.com/api/v1", {
    params: {
      api_key: "0BTE3F88UR9Y2VPX081XHVPTP29JONJAW9J6UXU7SKGLXH10VU2H98L7GEYEQWTX120029G8S9VG9X8O",
      // The target webpage :
      url: "https://www.slugmag.com/category/community/",
    },
  })
  // Retrieve the page
  .then(function (response) {
    const News = response;
    console.log(News.data);

    // Load the response data into Cheerio  !! Important
    const $ = cheerio.load(News.data);

    // Use Cheerio selectors to extract specific data
    // Need to find the correct selectors ( known : <a> for article links)
    // Double check capitalization consistency for variables
    const newsTitles = $("card-title a").text();
    // Can be made more specific by adding a class or id to the <a> tag
    const newsLinks = $("a").attr("href");
    const newsSummaries = $("card-text p").text();

    // Output the data in the terminal
    console.log(newsTitles);
    console.log(newsLinks);
    console.log(newsSummaries);
  })
  // Catch and log errors
  .catch(function (error) {
    console.error(error);
  });