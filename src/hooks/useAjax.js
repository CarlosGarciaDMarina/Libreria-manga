import { useState, useEffect } from "react";

// Hook personalizado para hacer peticiones AJAX
export const useAjax = (url, metodo = "GET", datosGuardar = null) => {
  const [estado, setEstado] = useState({
    datos: null, // almacenará los datos recibidos de la petición
    cargando: true, // indicará si la petición está en curso
    error: null // almacenará cualquier error que ocurra durante la petición
  });

  // Usamos useEffect para ejecutar la peticion AJAX cuando el componente se monta
  // o cuando cambian las dependencias (url, método, datosGuardar)
  useEffect(() => {
    // Función asíncrona para realizar la petición AJAX
    const getData = async () => {
      try {
        // Actualizamos el estado para indicar que la petición está en curso
        setEstado(prev => ({ ...prev, cargando: true }));
        // Configuración inicial de las opciones de la petición 
        let opciones = {
          method: metodo
        };

        // Si el método es PUT o POST, agregamos el cuerpo y los encabezados
        if (metodo === "PUT" || metodo === "POST") {
          opciones = {
            ...opciones,
            body: JSON.stringify(datosGuardar),
            headers: {
              "Content-Type": "application/json"
            }
          };
        }

        // Realizamos la petición utilizando fetch
        const response = await fetch(url, opciones);

        // Si la respuesta no es correcta. lanzamos error
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parseamos la respuesta a JSON
        const data = await response.json();
        //console.log("Datos recibidos:", data); // Verificar los datos recibidos

        // Actualizamos el estado con los datos recibidos 
        setEstado({ datos: data, cargando: false, error: null });
      } catch (error) {
        // Si ocurre un error, actualizamos el mensaje de error
        setEstado({ datos: null, cargando: false, error: error.message });
      }
    };
    // Ejecutamos la funcion getData
    getData();
  }, [url, metodo, datosGuardar]); // Asignamos las dependencias del useEffect

  // Devolvemos el estado actual del hook 
  return {
    datos: estado.datos,
    cargando: estado.cargando,
    error: estado.error
  };
};