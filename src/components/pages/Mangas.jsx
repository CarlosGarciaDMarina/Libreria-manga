import { useState, useEffect } from "react"
import { Global } from "../../helpers/Global";

export const Mangas = () => {

  // Inicializamos el useState
  const [mangas, setMangas] = useState([]);

  // Inicializamos el useEffect
  useEffect(()=>{
    conseguirMangas();


  }, []);

  const conseguirMangas = async() => {
    // Dejamos la url dentro de una const
    const url = Global.url+"mangas";

    // Hacemos peticion AJAX a nuestro backend para sacar los datos que tenemos almacenados
    // Usamos await para hacerlo async y, de este modo, que se quede el codigo esperando hasta que consigamos la respuesta del api y que pueda continuar, y asi todo el tiempo
    let peticion = await fetch(url, {
      // Le decimos que método vamos a utilizar para facilitar su proposito
      method: "GET"
    });
    let datos = await peticion.json();

    if(datos.status === "succes"){
      setMangas(datos.mangas)
    }
  } 

  return (
    <>
    {   
      // RECUERDA los if en React se utilizan con ? para el if y el else es con :
      mangas.length >= 1 ? 
      ( //IF
        // Utilizamos .map para recorrer el objeto mangas (es como si fuera un for in)
        mangas.map(manga => {
          return (
            // Es importante configurar la key para que se puedan actualizar los datos correctamente 
            // y para eso necesitamos una referencia para que React por dentro sepa donde estan los datos
            <article key={manga._id} className='manga-item'>
              <div className="mascara">
                <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" />
              </div>
              <div className="datos">
                <h3 className='title'>{manga.titulo}</h3>
                <p className='description'>{manga.descripcion}</p>
        
                <button className='edit'>Editar</button>
                <button className='delete'>Borrar</button>
              </div>
            </article>
          );
        })
      )
      :
      ( //ELSE
        <h1>No hay ningún manga</h1>
      )
    }
    </>
  )
}
