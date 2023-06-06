import { fetchRandomJoke } from "../api/api.js";

export async function getRandomJoke() {
  try {
    const joke = await fetchRandomJoke();
    document.getElementById("random-joke__text").innerHTML = joke;
  } catch (error) {
    console.log("Error al obtener el chiste:", error);
  }
  //
  /*const enlace = document.getElementById("random-joke__link");
  const enlaceHref = enlace.getAttribute("href");
  const enlaceConChiste = `${enlaceHref}?chiste=${encodeURIComponent(chiste)}`;
  enlace.setAttribute("href", enlaceConChiste);*/
}

export default getRandomJoke;
