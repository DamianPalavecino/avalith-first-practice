const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json));
