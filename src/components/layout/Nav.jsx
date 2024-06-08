import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href='/#'><NavLink to="/index">Inicio</NavLink></a>
        </li>
        <li>
          <a href='/#'><NavLink to="/mangas">Mangas</NavLink></a>
        </li>
        <li>
          <a href='/#'><NavLink to="/crear-mangas">Crear mangas</NavLink></a>
        </li>
        <li>
          <a href='/#'><NavLink to="/index">Inicio</NavLink></a>
        </li>
      </ul>
    </nav>
  )
}
