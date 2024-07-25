import { Global } from "../../helpers/Global"
import { Peticion } from "../../helpers/Peticion"
import { Link } from "react-router-dom"

export const Listado = ({mangas, setMangas}) => {

  const eliminar = async(id) => {
    let {datos} = await Peticion(Global.url+"manga/"+id, "DELETE");
    console.log(datos);

    if(datos.status === "success"){
      let mangasActualizados = mangas.filter(manga => manga._id != id);
      setMangas(mangasActualizados);
    }

  }
  
  return (      
        mangas.map(manga => (
        <article key={manga._id} className='manga-item'>
            <div className="mascara">
              {console.log(manga.imagen)}
              {manga.imagen != "default.png" && <img src={Global.url + "imagen/" + manga.imagen} alt={manga.titulo} />}
              {manga.imagen == "default.png" && <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />}
            </div>
            <div className="datos">
              <h3 className='title'><Link to={"/manga/"+manga._id}>{manga.titulo}</Link></h3>
              <p className='description'>{manga.descripcion}</p>
              <button className='edit'><Link to={"/editar/"+manga._id}>Editar</Link></button>
              <button className='delete' onClick={() => {
                eliminar(manga._id)
              }}>Borrar</button>
            </div>
        </article>
        ))
  )
}

/*

              <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />

*/
