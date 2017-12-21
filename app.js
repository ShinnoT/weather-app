// request module
const request = require('request');
const yargs = require('yargs');

// request local files
const geocode = require('./geocode/geocode.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;


let encodedAddress = encodeURIComponent(argv.a);
// let encodedAddress = encodeURIComponent(argv.address);
// there is also decodeURIComponent('blah blah');

// https request to google maps API to fetch location and coordinates
request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  console.log(error);
  // error will reveal the local error (mistyped url, own computer not connected to internet, etc)
  // body.statusCode will reveal the server error (404, 500, etc. which are problems with google for example and not local)
  console.log(response);
  console.log(body);
  // log the object prettier
  // console.log(JSON.stringify(body, undefined, 2));


  if (error) {
    console.log('unable to access google servers, sorry.');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('unable to find that address');
  } else if (body.status === 'OK') {
    // logging address and long lat
    console.log(`Adress: ${body.results[0].formatted_address}`);
    let lat = body.results[0].geometry.location.lat;
    let long = body.results[0].geometry.location.lng;
    console.log(`Latitude: ${lat}, Longitude: ${long}`);
  }

});

