const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    let breedInfo = data[0];
    if (breedInfo) {
      callback(null, breedInfo.description);
    } else {
      callback(`The breed: ${breedName} was not found`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
