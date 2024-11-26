import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import DetailPokemon from './Pages/DetailPokemon';
import TypePage from './Pages/TypePage';
import GenerationPage from './Pages/GenerationPage';
import PokemonByVersion from './Pages/PokemonByVersion';



function App() {
 

  return <>

      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <NavBar></NavBar>
      <Routes>
      <Route  path='/' element={<HomePage></HomePage>}> </Route>
      <Route path='/pokemon/:name'element={<DetailPokemon></DetailPokemon>}> </Route>
      <Route path='/type/:type'element={<TypePage></TypePage>}> </Route>
      <Route path='/generation/:name'element={<GenerationPage></GenerationPage>}> </Route>
      <Route path='/version/:name'element={<PokemonByVersion></PokemonByVersion>}> </Route>

      </Routes>
      </BrowserRouter>
    </>
  }

export default App