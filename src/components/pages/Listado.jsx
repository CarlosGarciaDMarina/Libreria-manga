import { Global } from "../../helpers/Global"

export const Listado = ({mangas, setMangas}) => {

  
  return (      
        mangas.map(manga => (
        <article key={manga._id} className='manga-item'>
            <div className="mascara">
              {console.log(manga.imagen)}
              {manga.imagen != "default.png" && <img src={Global.url + "imagen/" + manga.imagen} alt={manga.titulo} />}
              {!manga.imagen == "default.png" && <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />}
            </div>
            <div className="datos">
              <h3 className='title'>{manga.titulo}</h3>
              <p className='description'>{manga.descripcion}</p>
              <button className='edit'>Editar</button>
              <button className='delete'>Borrar</button>
            </div>
        </article>
        ))
  )
}

/*

              <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />

*/
