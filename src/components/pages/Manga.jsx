import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Global } from "../../helpers/Global";
import { Peticion } from '../../helpers/Peticion.jsx';

export const Manga = () => {
  const [manga, setManga] = useState([]);
  const [cargando, setCargando] = useState(true);
  const param = useParams();

  useEffect(() => {
    conseguirManga();
  }, []);

  const conseguirManga = async() => {

      const { datos } = await Peticion(Global.url + "manga/" + param.id, "GET");

      if (datos.status === "success") {
        console.log("Datos de mangas:", datos.manga); // Verifica los mangas
        setManga(datos.manga);
      } else{
        console.log("Ha ocurrido un error inesperado");
      }

      setCargando(false);
  };

  return (
    <div className="jumbo">
      {
        cargando ? "Cargando..." : 
            <>
            <div className="mascara">
              {console.log(manga.imagen)}
              {manga.imagen != "default.png" && <img src={Global.url + "imagen/" + manga.imagen} alt={manga.titulo} />}
              {manga.imagen == "default.png" && <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />}
            </div>
              <h1>{manga.titulo}</h1>
              <p>{manga.genero}</p>
              <p>{manga.descripcion}</p>
              <p>{manga.fecha}</p>
            </>
      }
    </div>
  );
};
