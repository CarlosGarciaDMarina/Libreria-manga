import { useState } from "react";

// Exportamos el hook de formularios
export const useForm = ( objetoInicial = {} ) => {

    // Vamos a controlar los estados del formulario 
    const [ formulario, setFormulario ] = useState(objetoInicial);
    
    // Esta funcion serializa el formulario
    const serializarFormulario = (formulario) => {

        // Almacenamos el form data del formulario
        const formData = new FormData(formulario);

        // Creamos el objeto completo del formulario
        const objetoCompleto = {};

        // En cada iteracion nos va a sacar el name y el value del objeto recorriendo formData
        for(let [name, value] of formData){
            // A cada name dentro de objetoCompleto le vamos a asignar el value
            objetoCompleto[name] = value;
        }

        // Devolvemos el objeto completo con los cambios del for
        return objetoCompleto;
    }

    // Método para enviar el form
    const enviado = (e) => {
        e.preventDefault();

        // Llamamos al metodo de serializar formulario
        let curso = serializarFormulario(e.target);

        // Asignamos el objeto al estado del formulario 
        setFormulario(curso);

        // Agregamos una clase al formulario con JS
        document.querySelector(".codigo").classList.add("enviado");
    }

    // Cuando cambie el formulario 
    const cambiado = ({target}) => {

        // Sacamos el name y el value, desestructurándolos
        const {name, value} = target;

        // Cambiamos el estado del formulario
        setFormulario({
            // Mantenemos lo que ya haya dentro de formulario y le añadimos lo que no haya, o lo que esté modificando
            ...formulario,
            [name]: value
        });
    }

    // Devolvemos
    return {
        formulario,
        enviado,
        cambiado
    }
}