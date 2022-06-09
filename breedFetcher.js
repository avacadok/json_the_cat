const request = require("request");

const fetchBreedDescription = function(breedName) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      // Print the error if one occurred
      console.log('error:', error);
      return;
    }

    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`Fail to find breed`);
    }

  });
};


module.exports = {

  fetchBreedDescription
};

