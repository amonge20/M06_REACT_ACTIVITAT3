import React, { useState } from "react";

const LlistatTasques = () => {
    const [tasques, setTasques] = useState([]);
    // Afegir tasca
    const afegirTasca = (tascaNova) => {
        setTasques([...tasques, tascaNova]);
    };
    // Eliminar tasca
    const eliminarTasca = (id) => {
        const tareasRestantes = tasques.filter((tasca, index) => index !== id);
        setTasques(tareasRestantes);
    };
    // Completar tasca 
    const completarTasca = (id) => {
        const TascActual = [...tasques];
        TascActual[id].Completa = !TascActual[id].Completa;
        setTasques(TascActual);
    };

    return(
        <div>
            <h1>Mis tareas</h1>
        </div>
    )
}

export default LlistatTasques;