// //JS promise practice
// //what are they and how do they work?

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('able to fulfill promise');
//   }, 2500);
// });

// //you can either resolve or reject ONLY once
// //you cant do both
// //you cant do more than once
// //thus no need to worry about multiple callbacks

// somePromise.then((message) => {
//   console.log('success: ', message);
//   // will print if promise was resolved (fullfilled)
// }, (errorMessage) => {
//   console.log('error: ', errorMessage);
//   // will print if promise was rejected (NOT fullfilled)
// });





//--------------------------------------------------
//ADVANCED PROMISES

let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('sorry invalid input, must be a number');
      }
    }, 2000);
  });
};

// asyncAdd(3, 5).then((sum) => {
//   console.log(`sum is equal to ${sum}`);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });


//chaining promises

// asyncAdd(3, 5).then((sum) => {
//   console.log(`sum is equal to ${sum}`);
//   return asyncAdd(sum, 20);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((sum) => {
//   console.log(`new sum is equal to ${sum}`);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

// should log:
// sum is equal to 8
// new sum is equal to 28


//however if first promis fails it will still print out second sucess
//to prevent this:

asyncAdd(3, '5').then((sum) => {
  console.log(`sum is equal to ${sum}`);
  return asyncAdd(sum, 20);
}).then((sum) => {
  console.log(`new sum is equal to ${sum}`);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

//catch will 'catch' any errors wherever in the promise chain and just stop the chain
//as well as display error in this case
