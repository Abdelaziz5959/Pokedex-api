import 'bootstrap/dist/css/bootstrap.min.css' 
import './App.css'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import DetailPokemon from './Pages/DetailPokemon';
import TypePage from './Pages/TypePage';



function App() {
 

  return <>

      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <NavBar></NavBar>
      <Routes>
      <Route  path='/' element={<HomePage></HomePage>}> </Route>
      <Route path='/pokemon/:name'element={<DetailPokemon></DetailPokemon>}> </Route>
      <Route path='/type/:type'element={<TypePage></TypePage>}> </Route>

      </Routes>
      </BrowserRouter>
    </>
  }

export default App