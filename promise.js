// let complete = true;

// let prom1 = new Promise(function(resolve,reject){

//     if(complete){
//         resolve(`I am successfull.`);
//     }else{
//         reject(`I am failed.`);
//     }

// });

// console.log(prom1);


// const proms = prom(1);
// function prom(complete){

//     return new Promise((resolve, reject) => {
//         if (complete) {

//             resolve("I am successfull.");
            
//         } else {
//             reject("I am failed");
            
//         }
//     })
    
// }
// proms.then(function(result) {

//     console.log(result);
    
// }).catch(function(errorResult){

//     console.log(errorResult);
// })



const fruits = ["Apple", "Orange", "Papaya" ,"undefined"];
// let resolve = "";

function accessArr(val) {
  return new Promise(function (res, rej) {
    if (val !== undefined && val !== null) {
      res(val);
    } else {
      rej("Value is not present");
    }
  });
}

// console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  accessArr(fruits[i]).then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}