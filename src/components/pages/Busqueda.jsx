import { useEffect, useState } from "react";
import { Global } from "../../helpers/Global";
import { useParams } from "react-router-dom";
import { Peticion } from '../../helpers/Peticion.jsx';
import { Listado } from "./Listado.jsx";

export const Busqueda = () => {
  const [mangas, setMangas] = useState([]);
  const params = useParams();

  useEffect(() => {
    conseguirMangas();
  }, []);

  useEffect(() => {
    conseguirMangas();
  }, [params]);

  const conseguirMangas = async() => {
      const { datos, cargando } = await Peticion(Global.url + "buscar/" + params.busqueda , "GET");
      console.log("Datos recibidos:", datos); // Verifica la respuesta

      if (datos.status === "success") {
        console.log("Datos de mangas:", datos.mangas); // Verifica los mangas
        setMangas(datos.mangas);
      } else {
        // Pasamos array vacio para que avise que no encuentra nada
        setMangas([]);
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