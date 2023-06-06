// Dependencies
const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("http://app.scrapingbee.com/api/v1", {
    params: {
      api_key: "0BTE3F88UR9Y2VPX081XHVPTP29JONJAW9J6UXU7SKGLXH10VU2H98L7GEYEQWTX120029G8S9VG9X8O",
      // The target webpage :
      url: "https://www.ksl.com/news/stream/multicultural-utah",
    },
  })

 // Retrieve the page
 .then(function (response) {
  const News = response;
  //console.log(News.data);

  // Load the response data into Cheerio !! Important
  const $ = cheerio.load(News.data);

  // Create an empty array to save the data
  const articles = [];

  // use Cheerio selectors to extract specific data
  // Iterate over each .card element to get specific data (title, link, summary)
  $(".queue_story").each(function () {
       
      const article = [];

      // $(this) for each .card element
      //.trim() to remove whitespace
      article.title = $(this).find(".headline h2").text().trim();
      article.link = $(this).find(".headline h2 a").attr("href");
      article.summary = $(this).find(".headline h5").text().trim();
      
      // !! Push the article data into the articles array
      articles.push(article);
  });

  // Output the extracted data /for each/ article 
  articles.forEach((article) => { 
    console.log("Title:", article.title);
    console.log("Link:", article.link);
    console.log("Summary:", article.summary);
    // For readability in terminal
    console.log("-------------------------");
  });
})

// Catch and log errors
// !! Edit for improved error handling when not 3 AM on a Saturday
.catch(function (error) {
  console.error(error);
});