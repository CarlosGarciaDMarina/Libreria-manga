import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { Peticion } from '../../helpers/Peticion.jsx';
import { Listado } from "./Listado.jsx";

export const Mangas = () => {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    console.log("Iniciando la petición para conseguir mangas...");
    conseguirMangas();
  }, []);

  const conseguirMangas = async() => {
      const { datos, cargando } = await Peticion(Global.url + "mangas", "GET");
      console.log("Datos recibidos:", datos); // Verifica la respuesta

      if (datos.status === "success") {
        console.log("Datos de mangas:", datos.mangas); // Verifica los mangas
        setMangas(datos.mangas);
      } else {
        console.error("Error en la respuesta de la API:", datos.message);
      }
  };


  console.log("Mangas listados:", mangas);

  return (
    <>
      {
        mangas.length >=1 ? <Listado mangas={mangas} setMangas={setMangas}/>
        : <h1>No hay mangas</h1>
      }
      
      {/*
      
        {
        mangas.length > 0 ? 
        (
          mangas.map(manga => (
            <article key={manga._id} className='manga-item'>
              <div className="mascara">
                <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />
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
        : 
        (
          <h1>No hay ningún manga</h1>
        )
      }

      
      */}

    </>
  );
};
