import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Global } from "../../helpers/Global";

export const Sidebar = () => {

  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const realizarBusqueda = (e) => {
    e.preventDefault();
    let valor = e.target.search_field.value;
    navegar("/buscar/"+valor, {replace: true});
  }


  return (
    <aside className='lateral'>
      <div className='search'>
        <h3 className='title'>Buscador: </h3>
        <form onSubmit={realizarBusqueda}>
          <input type='text' 
                  id='search_field' 
                  name='search_field' />

          <input type="submit" id='search' value="Buscar" />
        </form>
      </div>
      
    {/*
      <div className='add'>
        <h3 className='title'>Añadir manga</h3>

        <form>
            <input type='text' placeholder='Título' id='titulo' name='titulo' />
            <textarea placeholder='Descripción' id='descripcion' name='descripcion' />
            <input type='submit' value="Guardar" id='save' />
        </form>
      </div>
    */}
    </aside>
  )
}
