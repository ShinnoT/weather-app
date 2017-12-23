const yargs = require('yargs');

// request local files
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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


geocode.geocodeAddress(argv.address, (errorMessage, correctResult) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(correctResult, (errorMessage2, correctWeather) => {
      if (errorMessage2) {
        console.log(errorMessage2);
      } else {
        console.log(`the temperature currntly in ${argv.address} is ${correctWeather.temperature} degrees farenheit!`);
      }
    });
    // the first is stringifying, undefined is unneccessary parameter, 2 is spacing for object
    // the undefined here is unrelated to the callback parameter in geocode line 36
  }
});
// geocode.geocodeAddress(argv.a); ?????? does this work?
