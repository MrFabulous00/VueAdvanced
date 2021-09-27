function getData(callbackFunc) {
  $.get('url 주소/products/1', function(response) {
    // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
    callbackFunc(response);
  });
}
getData(function(tableData) {
  // $.get()의 response 값이 taableData에 전달됨
  console.log(tableData);
});

function getData(callback) {
  // new Promise() 추가
  return new Promise(function(resolve, reject) {
    $.get('url 주소/products/1', function(response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function(tableData) {
  console.log(tableData);
});

function getData() {
  return new Promise(function(resolve, reject) {
    resolve('hi');
  });
}
getData()
  .then(function(result) {
    console.log(result);
    throw new Error('Error in then()');
  })
  .catch(function(error) {
    console.log('then error : ', err);
  });

function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}
async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems);
}

function fetchUser() {
  var url = '';
  return fetch().then(function(response) {
    return response.json();
  });
}
function fetchTodo() {
  var url = '';
  return fetch(url).then(function(response) {
    return response.json();
  });
}
async function logTodoTitle() {
  var user = await fetchUser();
  if (user.id === 1) {
    var todo = await fetchTodo();
    console.log(todo.title);
  }
}
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title);
    }
  } catch (error) {
    console.log(error);
  }
}
/////////
function callAjax() {
  return new Promise(function(resolve, reject) {
    $.ajax({
      url:
        'https://www.inflearn.com/course/vue-js/lecture/17008?tab=curriculum&speed=1.5',
      sucess: function(data) {
        resolve(data);
      },
    });
  });
}

function fetchData() {
  var result = [];

  callAjax().then(function(data) {
    console.log('데이터 호출 결과', data);
    result = data;
    console.log('함수 결과', result);
  });

  // $.ajax({
  //   url:
  //     'https://www.inflearn.com/course/vue-js/lecture/17008?tab=curriculum&speed=1.5',
  //   sucess: function(data) {
  //     console.log('데이터 호출 결과', data);
  //     result = data;
  //     console.log('함수 결과', result);
  //   },
  // });
}

fetchData();
