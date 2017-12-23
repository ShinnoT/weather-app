const request = require('request');

let getWeather = (locationObject, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${REPLACE WITH OWN API KEY HERE}/${locationObject.latitude},${locationObject.longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature
      });
    } else {
      callback('cant retrieve data sorry, something wrong with API server');
    }

    // if (error) {
    //   callback('cant connect to forecast.io server sorry');
    // } else if (response.statusCode === 400) {
    //   callback('sorry the url is wrong, please run app again');
    // } else if () {
    //   callback(undefined, {
    //     temperature: body.currently.temperature
    //   });
    // }
  });
};


module.exports = {
  getWeather
};
