import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokemonCard}) => {

    const navigate = useNavigate ();
    const navigateTo = (idpokemon) => {
        navigate("/Pokemon/"+idpokemon);
    }
     


    return <>
    <Card style={{ width: '18rem' }} onClick={() => {navigateTo(pokemonCard.name)}}>
     <Card.Img variant="top" src={"https://img.pokemondb.net/artwork/"+pokemonCard.name+".jpg"} />
     <Card.Body>
       <Card.Title>{pokemonCard.name}</Card.Title>
       <Button variant="primary">detail</Button>
     </Card.Body>
   </Card>
   
   
   </>
}
 
export default PokemonCard;