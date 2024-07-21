// Hook personalizado para hacer peticiones AJAX
export const Peticion = async(url, metodo = "GET", datosGuardar = "") => {

  let opciones = {
    method: metodo
  };

  if (metodo === "PUT" || metodo === "POST") {
    opciones = {
      method: metodo,
      body: JSON.stringify(datosGuardar),
      headers: {
        "Content-Type": "application/json"
      }
    };
  }

  const peticion = await fetch(url, opciones);
  const datos = await peticion.json();

  return {
    datos
  };
};