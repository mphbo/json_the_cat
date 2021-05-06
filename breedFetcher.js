const request = require('request');


let name = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${name}`
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Most likely incorrect URL');
  }
  // console.log(data);
  // console.log(typeof data);
  let catObject = data[0]; 
  if (catObject === undefined) {
    console.log('Name not found!!!');
  } else {
    console.log(catObject.description);
  }


});
