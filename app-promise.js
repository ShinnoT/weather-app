const yargs = require('yargs');
const axios = require('axios');

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find the address');
  }

  let latitude = response.data.results[0].geometry.location.lat;
  let longitude = response.data.results[0].geometry.location.lng;
  let weatherUrl = `https://api.darksky.net/forecast/${ENTER OWN API KEY HERE}/${latitude},${longitude}`;
  return axios.get(weatherUrl);
}).then((response) => {
  let temperature = response.data.currently.temperature;
  console.log(`it is ${temperature} degrees farenheit in ${argv.address} right now!`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log('unable to connect to API server');
  } else {
    console.log(error.message);
  }
});


//here we can add more features like allow user to set default time so that
//if user does not put any arguments on terminal command
//it will fetch temperature of default location for example
//this can be dont by saving defualt to JSON and checking
//if arv.address === '' then use default location from JSON file
