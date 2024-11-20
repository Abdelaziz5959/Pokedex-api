import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import PokemonService from "../Services/PokemonService";




const NavBar = () => {
    const [type, setType] = useState([]);
    const fetchpokemonsbytype= async () => {
        try {
            const response = await PokemonService.getPokemonByType();

            setType(response.data.results);
            
            
        } catch (error) {
            console.log(error);
        }
    }
    // useEffect evite les boucles infini
    useEffect(() => {
        fetchpokemonsbytype()
    }, [])

    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto gap-3">
                    <Navbar.Brand><Link to={"/"}>Home</Link></Navbar.Brand>
                    {/* <Navbar.Brand><Link to={"/champion/:id"}>Champion</Link></Navbar.Brand> */}
                    {/* <Navbar.Brand><Link to={"/item/"}>Item</Link></Navbar.Brand> */}
                    <NavDropdown title="Type" id="basic-nav-dropdown">
                    {/* <NavDropdown title="Types" id="basic-nav-dropdown"> */}
            {type.map((type, index) => (
              <NavDropdown.Item
                key={index}
                href={`/type/${type.name}`}
              >
                {type.name.charAt(0).toUpperCase() + type.name.slice(1)} 
              </NavDropdown.Item>
            ))}
          </NavDropdown>
                        
          
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>;
}

export default NavBar;