import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/NavBar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

const productos = [
  "Paletas", 
  "Bolsos", 
  "Fundas", 
  "Pelotas"
]

const msj = "Bienvenido"

  return (
    <>
      <Navbar links={productos}/>
      <ItemListContainer saludo={msj}/>
    </>
  )
}

export default App


