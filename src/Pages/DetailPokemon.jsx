import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { Button, Card, Container, Form } from "react-bootstrap";



const DetailPokemon = () => {
    const { name } = useParams();
    const [Pokemon, setPokemon] = useState({});



    const fectchPokemonByID = async () => {

        try {
            const response = await PokemonService.getPokemonByID(name);
            const responseBis = await PokemonService.getPokemonByIDBis(name);
          

            setPokemon({...responseBis.data, ...response.data});
           
            

            // console.log(response.data.data[id]);


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fectchPokemonByID()
    }, [])





console.log(Pokemon);

    return <Container className="d-flex flex-column align-items-center">

        <h1>Pokemon {name}</h1>



        <div className="d-flex justify-content-center flex-wrap gap-3">
            <img style={{ width: '250%' }} src={"https://img.pokemondb.net/artwork/" + Pokemon.name + ".jpg"}
                alt={"imgchamps" + Pokemon} />
        </div>
        <h2>Habitat  </h2>
        <p>{Pokemon.habitat && Pokemon.habitat.name}</p>

        <div className="d-flex">
            <div className="col-6">
                <h2>Numéro du Pokemon</h2>
                <ul>
                    {Pokemon.id}
                </ul>
            </div>
            <div className="col-6">
                <h2>Type du Pokemon</h2>
                <ul>
                    {Pokemon.egg_groups && Pokemon.egg_groups.map((group) => {
                        return <li key={group.name}>{group.name}</li>
                    })}
                </ul>
            </div>
        </div>
        <h2>Infos</h2>
        <ul>
            {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[0].flavor_text}
        </ul>
        {/* <ul>
            <li>attaque : {Pokemon.info != undefined && Pokemon.info.attack}</li>
            <li>defense : {Pokemon.info && Pokemon.info.defense}</li>
            <li>magic : {Pokemon.info && Pokemon.info.magic}</li>
            <li>difficulté : {Pokemon.info && Pokemon.info.difficulty}</li>
        </ul>
        <h2>Passif :</h2>
        {Pokemon.passive && <>
            <h3>{Pokemon.passive.name}</h3>
            <div className="d-flex">
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive/" + Pokemon.passive.image.full} alt="" />
                <p>{Pokemon.passive.description}</p>
            </div>
        </>}
        {Pokemon.spells && Pokemon.spells.map((spell) => {
            return <>
                <h3>{spell.name}</h3>
                <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/" + spell.image.full} alt="" />
                <p>{spell.description}</p>
            </>
        })}

        {Pokemon.stats && Object.entries(Pokemon.stats).map((key) => {
            return <span>{key[0]} ={">"} {key[1]}</span>
        })} */}
    </Container>;



}

export default DetailPokemon;