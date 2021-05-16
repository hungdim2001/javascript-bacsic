// var promise = new Promise(
//   //executor
//   function (resolve, reject) {
//     // thanh cong: resolve()
//     // that bai: reject()
//     // resolve({
//     //     name: 'hung dep trai',
//     //     age:'18',
//     //     add:'thanh hoa',
//     // });
//     reject('co loi');
//   }
// );
// promise
//   .then(function (information) {
//       console.log(information)  })
//   .catch(function (error) {
//       console.log(error)
//   })
//   .finally(function () {
//       console.log('done')  });

// var sleep = function (ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// };
// sleep(1000)
//   .then(function () {
//     console.log(1);
//     return sleep(1000);
//   })
//   .then(function () {
//     console.log(2);
//     return sleep(1000);
//   });

/**
 * 1.promise.resolve
 * 2.promise.reject
 * 3.promise.all
 */
var promise = Promise.resolve("error!");
promise.then(function (result) {
  console.log(result);
});
var promise1 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([1]);
  }, 2000);
});
var promise2 = new Promise(function (resolve) {
  setTimeout(function () {
    resolve([2, 3]);
  }, 5000);
});
Promise.all([promise1, promise2])
.then(function (result) {
  console.log(result[1].concat(result[0]));
});
