// const fetch = require("node-fetch");

// const axios = require("axios");

// //** */

// axios.get("https://jsonplaceholder.typicode.com/userssss").then(
//   (response) => console.log(response.data),
//   (error) => console.log("Todo salió mal", error)
// );

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json()) // UNA PROMESA QUE SE RESUELVE AL VALOR= DATA
//   .then((data) => console.log(data));

const miPromesa = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Todo bien");
  } else {
    reject("Todo mal");
  }
});

// console.log(
//   miPromesa.then(
//     (response) => console.log("Todo bien: " + response),
//     (err) => console.log("Todo mal: " + err)
//   )
// );

miPromesa.catch((error) => console.log(error));
