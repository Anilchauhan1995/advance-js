 // if rain , resolve the promise , else reject

// const willRain = true;

// const checkRain = new Promise(function (res, rej) {
//   if (willRain) {
//     res("It's Raining!");
//   } else {
//     rej("Not Raining!");
//   }
// });

// checkRain.then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// const num = 10;

// const isEven = new Promise(function (res, rej) {
//   if (num % 2 == 0) {
//     res("It is even");
//   } else {
//     rej("Its odd");
//   }
// });

// isEven.then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// const fruits = ["Apple", "Orange", "Papaya" ,"undefined"];
// // let resolve = "";

// function accessArr(val) {
//   return new Promise(function (res, rej) {
//     if (val !== undefined && val !== null) {
//       res(val);
//     } else {
//       rej("Value is not present");
//     }
//   });
// }

// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i++) {
//   accessArr(fruits[i]).then(function (data) {
//       console.log(data);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// }

// Api -> Application programming interface

// JSON , lightweight data format , easy humans read write , machines get , parse
let result = "";
function fetchApi(url) {
  fetch(url)
    .then(function (data) {
      //JSON , directly , parse to original form
      return data.json(); //original form main convert
    })
    .then(function (res) {
      //json , parse original form main
      result = res;
      console.log(res);
    });
}

//  fetchApi("https://fakestoreapi.com/products");

Promise.all([fetchApi("https://fakestoreapi.com/products")])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
});