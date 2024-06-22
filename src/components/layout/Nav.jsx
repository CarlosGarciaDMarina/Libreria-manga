import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to="/index">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/mangas">Mangas</NavLink>
        </li>
        <li>
          <NavLink to="/crear-mangas">Crear mangas</NavLink>
        </li>
        <li>
          <NavLink to="/index">Inicio</NavLink>
        </li>
      </ul>
    </nav>
  )
}
