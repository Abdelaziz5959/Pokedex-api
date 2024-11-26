import { useEffect, useState } from "react";
import PokemonService from "../Services/PokemonService";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonCard from "../Components/PokemonCard";

const TypePage = () => {

    const {type} = useParams();
    const [pokemonList, setPokemonList] = useState ({});
   
    const fetchpokemontype= async () => {
        try {
            const response = await PokemonService.getPokemonType(type);
           
            setPokemonList(response.data.pokemon);
            
            
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect evite les boucles infini
    useEffect(() => {
        fetchpokemontype()
    }, [type])

   

    return <> <Container className="d-flex flex-column align-items-center">

    <div>
      <h1>Pokémons {type} </h1>
      <div>
        {pokemonList.length > 0 ? (
          <div className="d-flex justify-content-center flex-wrap gap-4">
          {pokemonList.map((pokemon) => {
                  return <PokemonCard pokemonCard={pokemon.pokemon} key={pokemon.pokemon.name}></PokemonCard>
              })}
          </div>
      
        ) : (
          <p>Aucun Pokémon trouvé pour ce type.</p>
        )}
      </div>
    </div>
  
  
    </Container>
    </>
}


export default TypePage; 