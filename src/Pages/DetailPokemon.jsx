import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokemonService from "../Services/PokemonService";
import { Button, Card, Container, Form } from "react-bootstrap";
import CanvasJSReact from '@canvasjs/react-charts';



const DetailPokemon = () => {
    const { name } = useParams();
    const [Pokemon, setPokemon] = useState({});
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
   

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


    const options = {
        animationEnabled: true,
        theme: "dark2",
        title: {
            text: "Statistique du Pokemon"
        },
        axisY: {
            scaleBreaks: {
                autoCalculate: true,
                type: "Valeur",
                includeZero: "true"
            }
        },
        data: [{
            type: "column",
            indexLabel: "{y}",		
            indexLabelFontColor: "white",
            dataPoints: Pokemon.stats ? Pokemon.stats.map(stat => ({ label: stat.stat.name, y: stat.base_stat })) : [] }]
        }

    return <Container className="d-flex align-items-center gap-10 flex-column">
        
        <div className="d-flex align-items-start gap-3">
        <div className="d-flex flex-column align-items-start">
            
            <div className="d-flex flex-column akign-item-center mb-5">
            <h1>{name} n°{Pokemon.id} </h1>
                <img style={{ width: '90%', borderRadius: "10px" }} src={"https://img.pokemondb.net/artwork/" + Pokemon.name + ".jpg"}
                    alt={"imgchamps" + Pokemon} />
            </div>

{/*             
            {/* {/* <span className="titre">Statistique du Pokemon :</span>
          
                {/* {Pokemon.stats && Pokemon.stats.map((stat) => {
                    return stat.stat.name + " "
                })} */} 
                <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>  
            
        </div>

        <div className="d-flex flex-column col-6 gap-3">
        {Pokemon.flavor_text_entries && Pokemon.flavor_text_entries[10].flavor_text}
            <span className="titre">Game Versions :</span>
            <div className="d-flex flex-wrap gap-3">
            {Pokemon.game_indices && Pokemon.game_indices.map((indice) => {
                return  <span className={indice.version.name +" col-2 d-flex  justify-content-center"}> {indice.version.name+" "}</span>
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
                    return <span className={ability.ability.name +" col-2 justify-content-center m-1"}> {ability.ability.name + " "}</span>
            })}
            </div>

            </div>  
            <span className="titre">Type du Pokemon :</span>
            <ul>
                {Pokemon.types && Pokemon.types.map((type) => {
                    return  <span className={type.type.name +" col-2 justify-content-center m-1"}> {type.type.name + " "}</span>
                })}
            </ul>

            

            <span className="titre">Faiblesses :</span>
            <ul>
                {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_from.map((damage) => {
                    return <span className={damage.name +" col-2 justify-content-center m-1"}> {damage.name + " "}</span>
                })}
            </ul>

            <span className="titre">Fort contre :</span>
            <ul>
                {Pokemon.damage_relations && Pokemon.damage_relations.double_damage_to.map((damage) => {
                    return <span className={damage.name +" col-2 justify-content-center m-1"}> {damage.name + " "}</span>
                })}
            </ul>
        </div>
    </div>
    </Container>;



}

export default DetailPokemon;