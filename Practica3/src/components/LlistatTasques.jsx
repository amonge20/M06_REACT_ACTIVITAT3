import React, { useState } from "react";


function LlistatTasques() {
    //Declara les tasques
    const [tasques, setTasques] = useState([]);

    //Afageix tasca
    // const afegirTasca = tasca => {
    //     const tasquesActuals = ;
    //     setTasques(tasquesActuals);
    // }
    // //Elimina tasca
    // const eliminarTasca = id => {
    //     const tasquesRestants = ;
    //     setTasques(tasquesRestants);
    // }
    // //Completa tasca
    // const completaTasca = id => {
    //     tasquesActuals = ;
    //     setTasques(tasquesRestants);
    // }
    return (
        <div>
            <h1>Tareas</h1>
            <button>Crear Tasca</button>
            <div className="tareas"></div>
        </div>
    )
}