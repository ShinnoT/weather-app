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
  // log the object prettier
  // console.log(JSON.stringify(body, undefined, 2));
});

// error will reveal the local error (mistyped url, own computer not connected to internet, etc)
// body.statusCode will reveal the server error (404, 500, etc. which are problems with google for example and not local)
