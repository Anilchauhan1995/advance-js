// DOM target
const products = document.getElementById("products");

// To fetch Api in JS , their are two methods , First -> Promise ✔ , Second -> Async Await


fetchProducts("https://fakestoreapi.com/products");

function fetchProducts(url) {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      displayData(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function displayData(data){

    data.forEach(item => {

        products.innerHTML += `    
        <div class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl p-2">
        <h2 class="text-2xl font-semibold text-gray-800 p-4">${item.title}</h2>
        <img src=${item.image} class="w-full h-60  object-fit" alt="Product Image">
        <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-700">${Math.floor(item.price)}</h3>
            <h4 class="text-sm text-gray-600">${item.category}</h4>
        </div>
    </div>`;
    
        
    });
}
