//promises width fetch

// fetch("https://reqres.in/api/users?page=", {
//   method: "GET",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (mosuliInfo) {
//     console.log(mosuliInfo);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// 1. pending state -
// 2. fulfilled:
//  -resolve
//  -reject

// promise
// let lotteryPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You win");
//     } else {
//       reject("You Lost");
//     }
//   }, 3000);
// });

// lotteryPromise
//   .then((response) => console.log(response))
//   .catch((responseError) => console.log(responseError));

//
// let waitFunction = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// waitFunction(2)
//   .then(() => {
//     console.log("Test1");
//     return waitFunction(3);
//   })
//   .then(() => {
//     console.log("Test2");
//   });

//   ----
// console.log("Hello1"); //სინქრონული

// let promise = new Promise((resolve, reject) => {
//   console.log("Start"); //სინქრონულია
//   resolve("Good Evening");
// });

// promise.then((response) => console.log(response)); //ასინქრონული);

// console.log("end"); //სინქრონული;  //Hello1 -> Start  -> End ->Good Evening

// // ----
// console.log("Academy 1"); //sin

// let promise2 = new Promise((resolve, reject) => {
//   console.log("Academy 2"); //sin
//   resolve("Academy3");
// });

// promise2
//   .then((response) => console.log(response))
//   .catch((error) => console.log("errir")); //asinc);

// console.log("Aademy 4"); //sin; //academy1 Academy2 academy4 academy3

// ----
// api(function (result) {
//   api2(function (result2) {
//     api3(function (resul3) {
//       // ...
//     });
//   });
// });

// api
//   .then(function (result) {
//     return api2();
//   })
//   .then(function (result2) {
//     return api3();
//   })
//   .then(function (resul3) {
//     // ...
//   })
//   .catch(function (error) {
//     //
//   });

// ----
// function getComments(commentId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (commentId > 100) {
//         resolve("Commet Ok");
//       } else {
//         reject("Comment Not Ok");
//       }
//     }, 1000);
//   });
// }

// function getPost(postId) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (postId > 100) {
//         resolve("Post Ok");
//       } else {
//         reject("Post Not Ok");
//       }
//     }, 2000);
//   });
// }

// Promise.all([getComments(150), getPost(200)])
//   .then((responses) => {
//     console.log(responses);
//   })
//   .catch(() => console.log("Not Ok"));

//   async await
function test1() {
  setTimeout(() => {
    console.log("test1");
  }, 3000);
}
function test2() {
  setTimeout(() => {
    console.log("test2");
  }, 2000);
}
async function testFunc() {
  await test2();
  await test1();
}
testFunc();
console.log("hi"); //hi test2 test1

function getComments(commentId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (commentId > 100) {
        resolve("Commet Ok");
      } else {
        reject("Comment Not Ok");
      }
    }, 1000);
  });
}

async function commentFunct() {
  try {
    let comments = await getComments(150);
    console.log(comments);
  } catch (errorText) {
    console.log(errorText);
  }
}

commentFunct();

// async with fetch
// fetch("https://reqres.in/api/users?page=", {
//   method: "GET",
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((mosuliInfo) => {
//     console.log(mosuliInfo);
//   });

// let myAsyncFnc = async() => {

// }

async function TestFunctionAsync() {
  let response = await fetch("https://reqres.in/api/users?page=");
  //   console.log(response);
  if (!response.ok) {
    throw new Error("Can not fetch data");
  }

  let data = await response.json();
  return data;
}

TestFunctionAsync()
  .then((mosuliInfoJs) => console.log("mosuli infromacia", mosuliInfoJs))
  .catch((error) => console.log(error));
