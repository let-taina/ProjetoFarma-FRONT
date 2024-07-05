import { useEffect, useState } from "react";
import Categoria from "../../models/Categoria";
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, deletar } from "../../services/Service";

function DeletarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
  const navigate = useNavigate()


  function retornar() {
    navigate("/categoria")
  }

  const {id} = useParams<{id: string}>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria)
    } catch (error) {
      alert('Erro ao buscar o tema')
    }
  }

  async function apagarCategoria(){
    try {
      await deletar(`/categoria/${id}`)
      alert('Categoria deletada')
      retornar()
    } catch (error: any) {
      alert('Erro ao deletar a categoria')
    }
  }

    useEffect(() => {
    if(id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.descricao}
        </p>
        <div className="flex">
          <button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2" onClick={retornar}>
            Não
          </button>
          <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center" onClick={apagarCategoria}>
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;