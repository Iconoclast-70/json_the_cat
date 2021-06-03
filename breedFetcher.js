const request = require("request");
let url;

const args = process.argv.slice(2);
if (args.length > 0) {
  url = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0];
} else {
  url = "https://api.thecatapi.com/v1/breeds/search?q=sib";
}

request(url, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`The breed: ${args[0]} was not found`);
  } else {
    console.log(data[0].description);
  }
});