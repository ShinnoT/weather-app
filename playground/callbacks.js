let getUser = (userid, callback) => {
  let user = {
    id: userid,
    name: 'shinno'
  };

  setTimeout(() => {
    callback(user);
  }, 2000);

};


//the name does not need to be user here in this case
getUser(21, (user) => {
  console.log(user);
});
