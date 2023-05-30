import { fetchRandomJoke } from "./api.js";

export async function getRandomJoke() {
  try {
    const joke = await fetchRandomJoke();
    document.getElementById("random-joke__text").innerHTML = joke;
  } catch (error) {
    console.log("Error al obtener el chiste:", error);
  }
}

export default getRandomJoke;
