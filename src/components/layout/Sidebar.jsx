import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='lateral'>
      <div className='search'>
        <h3 className='title'>Buscador:</h3>
        <form>
          <input type='text' 
                  id='search_field' 
                  name='busqueda' />

          <button id='search'>Buscar</button>
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
