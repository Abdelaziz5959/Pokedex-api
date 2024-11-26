import axios from "axios";

function getPokemonGeneration() {
  return axios.get("https://pokeapi.co/api/v2/generation/");
}

function getPokemonByGeneration(generation) {
  return axios.get("https://pokeapi.co/api/v2/generation/" + generation);
}

export default {
    getPokemonGeneration, getPokemonByGeneration
 };
