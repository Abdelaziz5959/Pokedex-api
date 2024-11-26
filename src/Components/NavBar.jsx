import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonService from "../Services/PokemonService";
import GenerationService from "../Services/GenerationService";
import VersionService from "../Services/VersionService";

const NavBar = () => {
 const navigate = useNavigate ()
  const [type, setType] = useState([]);
  const [generation, setGeneration] = useState([]);
  const [versions, setVersions] = useState([]);


  const fetchpokemonsbygeneration = async () => {
    try {
      const response = await GenerationService.getPokemonGeneration();

      setGeneration(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchpokemonsbytype = async () => {
    try {
      const response = await PokemonService.getPokemonByType();

      setType(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchVersions = async () => {
    try {
      const response = await VersionService.getAllVersion();

      setVersions(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  
  // useEffect evite les boucles infini
  useEffect(() => {
    fetchpokemonsbytype(), fetchpokemonsbygeneration(), fetchVersions()
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-3">
              <Navbar.Brand>
                <Link to={"/"}>Home</Link>
              </Navbar.Brand>
              {/* <Navbar.Brand><Link to={"/champion/:id"}>Champion</Link></Navbar.Brand> */}
              {/* <Navbar.Brand><Link to={"/item/"}>Item</Link></Navbar.Brand> */}
              <NavDropdown title="Types" id="basic-nav-dropdown">
                {type.map((type, index) => (
                  <NavDropdown.Item key={index} href={`/type/${type.name}`}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}{" "}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Generations" id="basic-nav-dropdown">
                {generation.map((generation) => (
                  <NavDropdown.Item
                    key={generation.name + "nav"}
                    href={`/generation/${generation.name}`}
                  >
                    {generation.name}{" "}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Versions" id="basic-nav-dropdown">
                {versions.map((version) => {
                  return (
                    <NavDropdown.Item
                      key={version.name + "nav"}
                      onClick={() => {
                        navigate("/version/" + version.name);
                      }}
                    >
                      {version.name}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>


          
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
