import React from 'react'
import './App.css'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategorias from './components/categorias/ListaCategorias';
import FormularioCategoria from './components/categorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/DeletarCategoria';

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<ListaCategorias/>} />
              <Route path="/cadastrarCategoria" element={<FormularioCategoria/>} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
