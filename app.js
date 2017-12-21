// request module
const request = require('request');
const yargs = require('yargs');

const argv = yargs.argv
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

  // logging address and long lat
  console.log(`Adress: ${body.results[0].formatted_address}`);
  let lat = body.results[0].geometry.location.lat;
  let long = body.results[0].geometry.location.lng;
  console.log(`Latitude: ${lat}, Longitude: ${long}`);
});

// error will reveal the local error (mistyped url, own computer not connected to internet, etc)
// body.statusCode will reveal the server error (404, 500, etc. which are problems with google for example and not local)
