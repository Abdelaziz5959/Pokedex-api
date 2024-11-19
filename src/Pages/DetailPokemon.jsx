import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { Button, Card, Container, Form } from "react-bootstrap";
import CanvasJSReact from '@canvasjs/react-charts';



const DetailPokemon = () => {
    const { name } = useParams();
    const [Pokemon, setPokemon] = useState({});
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Statistique du Pokemon"
        },
        axisY: {
        title: "Active Installations",
            scaleBreaks: {
                autoCalculate: true,
                type: "wavy",
                lineColor: "white"
            }
        },
        data: [{
            type: "column",
            indexLabel: "{y}",		
            indexLabelFontColor: "white",
            dataPoints: [
                {"label":"hp","y":5000000},
                {"label":"Jetpack","y":4000000},
                {"label":"WP Super Cache","y":2000000},
                {"label":"bbPress","y":300000},
                {"label":"BuddyPress","y":200000},
                {"label":"Health Check","y":200000}    
            ]
        }]
    }


    const fectchPokemonByID = async () => {

        try {
            const response = await PokemonService.getPokemonByID(name);
            const responseBis = await PokemonService.getPokemonByIDBis(name);
            const responseBisTwo = await PokemonService.getPokemonByIDBisTwo(responseBis.data.types[0].type.name);

            setPokemon({ ...responseBisTwo.data, ...responseBis.data, ...response.data });



            // console.log(response.data.data[id]);


        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fectchPokemonByID()
    }, [])





    console.log(Pokemon);

    return <Container className="d-flex align-items-center gap-10 flex-column">
        
        <div className="d-flex align-items-start gap-3">
        <div className="d-flex flex-column align-items-start">
            
            <div className="d-flex flex-column akign-item-center">
            <h1>{name} n°{Pokemon.id} </h1>
                <img style={{ width: '90%', borderRadius: "10px" }} src={"https://img.pokemondb.net/artwork/" + Pokemon.name + ".jpg"}
                    alt={"imgchamps" + Pokemon} />
            </div>

            
            <span className="titre">Statistique du Pokemon :</span>
          
                {Pokemon.stats && Pokemon.stats.map((stat) => {
                    return stat.stat.name + " "
                })}
                <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
            
        </div>

        <div className="d-flex flex-column col-6 gap-3">
        {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[10].flavor_text}
            <span className="titre">Game Versions :</span>
            <div className="d-flex flex-wrap gap-3">
            {Pokemon.game_indices && Pokemon.game_indices.map((indice) => {
                return  <span className={indice.version.name +" col-2"}> {indice.version.name+" "}</span>
            })}
            </div>

            {/* <div className="d-flex gap-3">
                

                <div className="col-6">
                    <span className="titre">Type du Pokemon :</span>
                    
                        {Pokemon.egg_groups && Pokemon.egg_groups.map((group) => {
                            return <li key={group.name}>{group.name}</li>
                        })}
                    
                </div>
            </div> */}

            
            <div id="para" className="d-flex justify-content-between flex-wrap gap-3">
            <div className="d-flex flex-column ">
            <span className="titre">Taille :</span>
            {Pokemon.height}
           

           
            <span className="titre">Poids :</span>
            {Pokemon.weight}
             </div>   
           <div className="d-flex flex-column " >
            <span className="titre">Compétences :</span>         
            {Pokemon.abilities && Pokemon.abilities.map((ability) => {
                    return ability.ability.name + " "
            })}
            </div>

            </div>  
            <span className="titre">Type du Pokemon :</span>
            <ul>
                {Pokemon.types && Pokemon.types.map((type) => {
                    return type.type.name + " "
                })}
            </ul>

            

            <span className="titre">Faiblesses :</span>
            <ul>
                {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_from.map((damage) => {
                    return damage.name + " "
                })}
            </ul>

            <span className="titre">Fort contre :</span>
            <ul>
                {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_to.map((damage) => {
                    return damage.name + " "
                })}
            </ul>
        </div>
    </div>
    </Container>;



}

export default DetailPokemon;