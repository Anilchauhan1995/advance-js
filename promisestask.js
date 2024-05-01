

let complete = 4;

let prom1 = new Promise(function(resolve,reject){
    
    if(complete){
        resolve(`I am successfull.`);
    }else{
            reject(`I am failed.`);
    }

});

prom1.then(function(result) {

console.log(result);

}).catch(function(errorResult){

console.log(errorResult);
})



let num = 5;

const prom = new Promise((resolve, reject) => {
    
    if (num % 2 == 0) {
        
        resolve(`this Number is even ${num}`);
        
    } else {
        reject(`this Number is odd ${num}`);
        
    }
})

prom.then(function(result) {
    
    console.log(result);
}).catch(function(error) {
    console.log(error);
    
})


const proms = myproms(4);

function myproms(num){

return new Promise((resolve, reject) => {
    if (num  % 2 == 0) {

    resolve(`this number is even ${num}`);
        
    } else {
        reject(`this number is odd ${num}`);
        
    }
})

}

proms.then(function(result) {

console.log(result);

}).catch(function(errorResult){

console.log(errorResult);
})
