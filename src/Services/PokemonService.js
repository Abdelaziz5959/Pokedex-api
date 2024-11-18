import axios from "axios"

function getAllPokemon() {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
};

function getPokemonByID(name) {
  return axios.get("https://pokeapi.co/api/v2/pokemon-species/"+name)
};

function getPokemonByIDBis(name) {
  return axios.get("https://pokeapi.co/api/v2/pokemon/"+ name)
};

export default {
  getAllPokemon, getPokemonByID, getPokemonByIDBis
}