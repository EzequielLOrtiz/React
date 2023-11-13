import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:idProduct' element={<ItemDetailContainer/>} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/ubicacion' element={<Ubicacion />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App