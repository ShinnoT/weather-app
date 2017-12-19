console.log('starting app');

setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('second setTimeout');
}, 0);

console.log('finishing app');


//order of logs:
//1 - starting app
//2 - finishing app
//3 - second setTeimeout
//4 - inside of callback
