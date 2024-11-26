import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PokemonCard from "../Components/PokemonCard";
import GenerationService from "../Services/GenerationService";

const GenerationPage = () => {

    const {name} = useParams();
    const [pokemonGeneration, setPokemonGeneration] = useState ({});


    const fetchpokemongeneration= async () => {
        try {
            const response = await GenerationService.getPokemonByGeneration(name);
           
            setPokemonGeneration(response.data);
            
            
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect evite les boucles infini
    useEffect(() => {
        fetchpokemongeneration()
    }, [])

   

    return <> <Container className="d-flex flex-column align-items-center">
         <h1>{pokemonGeneration.names && pokemonGeneration.names[3].name} </h1>

         <div className="d-flex justify-content-center flex-wrap gap-4">
         {pokemonGeneration.pokemon_species && pokemonGeneration.pokemon_species.map ((pokemon) => {
          return <PokemonCard key={pokemon.name} pokemonCard={pokemon}/>
         })}
         </div>

   
  
  
    </Container>
   </>
} 


export default GenerationPage;  