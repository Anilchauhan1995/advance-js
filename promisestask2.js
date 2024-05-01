const p1 = false;

let prom = new Promise((resolve, reject) => {
    if (p1) {

        resolve("I'm seccessfull")
        
    } else {
        reject("I'm failed")
        
    }
})

prom.then((result) => {

    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});


let num = 0;

const p2 = new Promise((resolve, reject) => {
    for (let i = 0; i <= 10; i++) {
        num++;
        if (i%2 == 0) {

            resolve(`this number is even ${num + i}`)
            
        } else {
            
        }
        
    }
})

p2.then((result) => {

    console.log(result);
    
}).catch((err) => {
    
    console.log(err);
});