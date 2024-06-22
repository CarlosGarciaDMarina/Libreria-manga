import {Link} from 'react-router-dom'

export const Index = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a mi libreria de mangas</h1>
      <p>He desarrollado este blog con el MERN Stack (Mongo, Express, React y NodeJS)</p>
      <Link to = "/mangas" className='button'>Ver los mangas</Link>
    </div>
  )
}
