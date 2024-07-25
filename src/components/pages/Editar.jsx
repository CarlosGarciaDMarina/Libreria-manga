import { useState, useEffect } from "react"
import {useForm} from "../../hooks/useForm"
import { useParams } from "react-router-dom";
import { Peticion } from "../../helpers/Peticion";
import { Global } from "../../helpers/Global";

export const Editar = () => {

  const [manga, setManga] = useState([]);
  const [resultado, setResultado] = useState("no_enviado");
  const {formulario, enviado, cambiado} = useForm({});
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

  };



  const editarManga = async(e) => {
    e.preventDefault();
    
    // Recogemos datos del formulario
    let nuevoArticulo = formulario;
    
    //Guardamos el manga en el backend
    const {datos} = await Peticion(Global.url+"manga/"+param.id, "PUT", nuevoArticulo);
    console.log(datos);

    const fileInput = document.querySelector('#file');

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("Guardado");

      // Conseguimos el FileInput

      const formData = new FormData();
      formData.append("file", fileInput.files[0]);
      //formData.set("file", fileInput.files[0], fileInput.files[0].name);

      const imagen = await Peticion(Global.url+"actualizar-imagen/"+datos.manga._id, "PUT", formData, true);

      console.log(imagen.datos);

    } else{
      setResultado("no_enviado");
    }
    
    console.log(datos);
  }


  return (
    <div>
        <div className="jumbo">
        <div className="mascara">
              {console.log(manga.imagen)}
              {manga.imagen != "default.png" && <img src={Global.url + "imagen/" + manga.imagen} alt={manga.titulo} />}
              {manga.imagen == "default.png" && <img src="https://s4.anilist.co/file/anilistcdn/staff/large/n204454-Yah6LS3EJzI2.png" alt={manga.titulo} />}
            </div>
          <h1>Editar {manga.titulo}</h1>
          <p>Formulario para editar el manga: {manga.titulo}</p>

          <strong>{resultado == "Guardado" ? "Manga guardado" : ""}</strong>
          <strong>{resultado == "no_enviado" ? "Datos incorrectos" : ""}</strong>

          <form className="formulario"onSubmit={editarManga} >
            <div className="form-group">
              <label htmlFor="titulo">Titulo</label>
              <input type="text" name="titulo" onChange={cambiado} placeholder={manga.titulo} />
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">descripcion</label>
              <textarea name="descripcion" onChange={cambiado} placeholder={manga.descripcion} />
            </div>

            <div className="form-group">
              <label htmlFor="genero"> Genero</label>
              <input type="text" name="genero" onChange={cambiado} placeholder={manga.genero} />
            </div>

            <div className="form-group">
              <label htmlFor="file"></label>
              <input type="file" name="file" id="file" />
            </div>

            <input type="submit" value="Guardar" className="btn btn-success" />
          </form>
        </div>
    </div>  )
}
