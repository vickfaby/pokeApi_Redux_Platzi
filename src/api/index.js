import axios from "axios";

export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((respuesta) => respuesta.data.results
  )
    .catch((err) => console.log(err));
}

export default getPokemon;
