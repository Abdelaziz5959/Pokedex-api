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

function getPokemonByIDBisTwo(name) {
  return axios.get(" https://pokeapi.co/api/v2/type/"+ name)
};

function getPokemonByType() {
  return axios.get(" https://pokeapi.co/api/v2/type/")
};

function getPokemonType(type) {
  return axios.get(" https://pokeapi.co/api/v2/type/"+ type)
};

export default {
  getAllPokemon, getPokemonByID, getPokemonByIDBis, getPokemonByIDBisTwo, getPokemonByType, getPokemonType
};