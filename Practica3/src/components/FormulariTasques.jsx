import React, { useState } from "react";

const FormulariTasques = ({ funcAfegirTasca }) => {
    const [textTasca, setTextTasca] = useState('');

    const enviarForm = (e) => {
        e.preventDefault();
        const tareaNueva = {
            text: textTasca,
            completada: false,
        };
        funcAfegirTasca(tareaNueva);
        setTextTasca('');
    };
    
    const cambiarTextoTasca = (e) => {
        setTextTasca(e.target.value);
    };
        
    return(
        <form onSubmit={enviarForm}>
            <input type="text" value={textTasca} placeholder="Introdueix la teva tasca" onChange={cambiarTextoTasca} />
            <button type="submit"> Afegir Tasca </button>
        </form>
    );
};

export default FormulariTasques;