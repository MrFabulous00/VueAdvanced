async function fetchData() {
  await getUserList();
}

async function fetchData() {
  var list = await getUserList();
}

function getUserList() {
  return new Promise(function(resolve, reject) {
    var userList = ['user1', 'user2', 'user3'];
    resolve(userList);
  });
}
