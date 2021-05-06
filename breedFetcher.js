const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    
    const catObject = data[0];
    if (!catObject) {
      return callback('Name not found!!!', null);
    } else {
      return callback(null, catObject.description);
    }
  });
};

module.exports = { fetchBreedDescription };

