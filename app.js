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
    console.log(JSON.stringify(correctResult));
  }
});
// geocode.geocodeAddress(argv.a); ?????? does this work?

