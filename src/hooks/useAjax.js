import { useState, useEffect } from "react";

export const useAjax = (url, metodo = "GET", datosGuardar = null) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
    error: null
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setEstado(prev => ({ ...prev, cargando: true }));

        let opciones = {
          method: metodo
        };

        if (metodo === "PUT" || metodo === "POST") {
          opciones = {
            ...opciones,
            body: JSON.stringify(datosGuardar),
            headers: {
              "Content-Type": "application/json"
            }
          };
        }

        const response = await fetch(url, opciones);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setEstado({ datos: data, cargando: false, error: null });
      } catch (error) {
        setEstado({ datos: null, cargando: false, error: error.message });
      }
    };

    getData();
  }, [url, metodo, datosGuardar]);

  return {
    datos: estado.datos,
    cargando: estado.cargando,
    error: estado.error
  };
};
