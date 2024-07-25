// Hook personalizado para hacer peticiones AJAX
export const Peticion = async(url, metodo = "GET", datosGuardar = "", archivos = false) => {

  let opciones = {
    method: metodo
  };

  if (metodo === "PUT" || metodo === "POST") {

    let body = JSON.stringify(datosGuardar);

    if(archivos){
      opciones = {
        method: metodo,
        body: datosGuardar

      };
    } else {
      opciones = {
        method: metodo,
        body,
        headers: {
          "Content-Type": "application/json"
        }
      };
    }
  }

  const peticion = await fetch(url, opciones);
  const datos = await peticion.json();

  return {
    datos
  };
};