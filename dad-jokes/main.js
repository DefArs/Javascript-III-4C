import getRandomJoke from "./js/jokeBase/random.js";
import { searchJoke } from "./js/jokeBase/search.js";
//import { shopJoke } from "./js/components/shop/jokeShow.js";

document
  .getElementById("random-joke__btn")
  .addEventListener("click", getRandomJoke);
document
  .getElementById("search-joke__btn")
  .addEventListener("click", searchJoke);

document.getElementById("cart__btn").addEventListener("click", function () {
  document.getElementById("cart__slide").classList.toggle("open");
});

document
  .getElementById("cart-list-trash")
  .addEventListener("click", function () {
    let listCart = document.getElementById("cart-list");
    listCart.innerHTML = "";
  });

//shopJoke();
