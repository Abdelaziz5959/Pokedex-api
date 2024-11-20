import { useEffect, useState } from "react";
import PokemonService from "../Services/PokemonService";
import PokemonCard from "../Components/PokemonCard";
import { Container, Form } from "react-bootstrap";

const HomePage = () => {

    const [Pokemon, setPokemon] = useState([])
    const [searchValue, setSearchValue] = useState("");
    const [filteredpokemon, setFilteredpokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(500);


    const handleChange = (event) => {
        setSearchValue(event.currentTarget.value);
    }

    const fetchpokemons = async () => {
        try {
            const response = await PokemonService.getAllPokemon();

            setPokemon(response.data.results);
            setFilteredpokemon(response.data.results)
            
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect evite les boucles infini
    useEffect(() => {
        fetchpokemons()
    }, [])

    useEffect(() => {
        setFilteredpokemon(Pokemon.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
        }))
    }, [searchValue])

    return <> <Container className="d-flex flex-column align-items-center">
        <h1>Pokemon</h1>
        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton pokemon</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Pikachu" value={searchValue} onChange={handleChange} />
            </Form.Group>
        </Form>
        <div className="d-flex justify-content-center flex-wrap gap-3">
            {filteredpokemon.map((pokemon) => {
                return <PokemonCard pokemonCard={pokemon} key={pokemon.name}></PokemonCard>
            })}
        </div>
    </Container>
    </>
}


export default HomePage;