import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {


        return(
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia da Letícia</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline'>Produtos</Link>
              <Link to='/temas' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar categoria</Link>
            
            </div>
          </div>
        </div>
      )
    
    }

export default Navbar