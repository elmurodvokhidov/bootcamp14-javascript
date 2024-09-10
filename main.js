// const products = localStorage.getItem("products");
// const parsedProducts = JSON.parse(products);

// let products = JSON.parse(localStorage.getItem("products")) || [];

// const container = document.querySelector("div");

// products.forEach((product, index) => {
//     container.innerHTML += `<h4>${index + 1}. ${product?.title}</h4>`
// });

// function addNewProduct(newProduct) {
//     products = JSON.parse(localStorage.getItem("products")) || [];
//     products.push(newProduct);
//     const value = JSON.stringify(products);
//     localStorage.setItem("products", value);
// };


// What is a callback function?
// function greet(name, callback) {
//     console.log(`Hello, ${name} 👋`);

//     callback(name);
// }

// const anotherGreet = (name) => {
//     console.log(`Hello again, ${name}`);
// }

// greet("Michael", anotherGreet);

// Sync, Async
// console.log("First message...");
// console.log("Second message...");
// setTimeout(() => {
//     console.log("New message logged...");
// }, 3000);
// console.log("Third message...");