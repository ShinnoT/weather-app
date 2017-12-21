// request module
const request = require('request');



// https request to google maps API to fetch location and coordinates
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=tokyo%20impact%20hub',
  json: true
}, (error, response, body) => {
  console.log(error);
  console.log(response);
  console.log(body);
});

