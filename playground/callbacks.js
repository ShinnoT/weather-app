let getUser = (userid, callback) => {
  let user = {
    id: id,
    name: 'shinno'
  };
  callback(user);
};


//the name does not need to be user here in this case
getUser(21, (user) => {
  console.log(user);
});
