const request = require("request");

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      // Print the error if one occurred
      console.log('error:', error);
      return;
    }
    //install callback function
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback(`Fail to find breed`, null);
    }

  });
};


module.exports = {

  fetchBreedDescription
};

