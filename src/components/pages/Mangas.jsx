import { Global } from "../../helpers/Global";
import { useAjax } from '../../hooks/useAjax'; // Asegúrate de que la ruta al hook sea correcta

export const Mangas = () => {
  const { datos, cargando, error } = useAjax(Global.url + "mangas", "GET");

  console.log("Estado de datos:", datos); // Verificar los datos en el componente

  return (
    <>
      { cargando && <h1>Cargando...</h1> }
      { error && <h1>Error: {error}</h1> }
      { datos && datos.status === "succes" && datos.mangas.length >= 1 ? (
        datos.mangas.map(manga => (
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
      ) : (
        !cargando && <h1>No hay ningún manga</h1>
      )}
    </>
  );
};


