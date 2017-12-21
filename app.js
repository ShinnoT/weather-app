// request module
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


geocode.geocodeAddress(argv.address, (errorMessage, correctResult) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(correctResult, undefined, 2));
    // the first is stringifying, undefined is unneccessary parameter, 2 is spacing for object
    // the undefined here is unrelated to the callback parameter in geocode line 36
  }
});
// geocode.geocodeAddress(argv.a); ?????? does this work?

