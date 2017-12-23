const request = require('request');

let geocodeAddress = (address) => {
  let encodedAddress = encodeURIComponent(address);
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true
    }, (error, response, body) => {

      // if (!error && body.status === 'OK') {
      //   resolve({
      //     address: body.results[0].formatted_address,
      //     latitude: body.results[0].geometry.location.lat,
      //     longitude: body.results[0].geometry.location.lng
      //   });
      // } else {
      //   reject('unable to fetch address');
      // }

      if (error) {
        reject('unable to access google servers, sorry.');
        // console.log('unable to access google servers, sorry.');
      } else if (body.status === 'ZERO_RESULTS') {
        reject('unable to find that address');
        // console.log('unable to find that address');
      } else if (body.status === 'INVALID_REQUEST') {
        reject('invalid request sorry');
      } else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }


    });
  });
};

geocodeAddress('tokyo').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
