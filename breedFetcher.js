const request = require("request");

const breed = process.argv.slice(2);

const breedInfo = function(breed) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

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
    // if (response !== 200) {
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // }
    
    // if(data[0].description) {
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    // }

    // console.log(data)
    // console.log(data[0].description);
    // console.log(typeof data);
    // //Access the first entry in the data array and print out the description for the user.
    // console.log(data[0].description)

  });
};

breedInfo(breed);
