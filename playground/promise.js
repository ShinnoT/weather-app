//JS promise practice
//what are they and how do they work?

let somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('able to fulfill promise');
  }, 2500);
});

//you can either resolve or reject ONLY once
//you cant do both
//you cant do more than once

somePromise.then((message) => {
  console.log('success: ', message);
  // will print if promise was resolved (fullfilled)
}, (errorMessage) => {
  console.log('error: ', errorMessage);
  // will print if promise was rejected (NOT fullfilled)
});
