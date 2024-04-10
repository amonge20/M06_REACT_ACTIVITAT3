import React, { useState } from "react";
import Formulari from "./Formulari";

const LlistatTasques = props => {
    const [tasques, setTasques] = useState([]);
    // Afegir tasca
    const afegirTasca = tascaNova => {
        const tascActual = [...tasques, tascaNova]
        setTasques(tascActual);
    };
    // Eliminar tasca
    const eliminarTasca = (id) => {
        const tasquesRestants = tasques.filter((tasca, index) => index !== id);
        setTasques(tasquesRestants);
    };
    // Completar tasca 
    const completarTasca = (id) => {
        const TascActual = tasques.map((tasques, index) => {
            if (index === id) {
                return { ...tasques, completarTasca: !tasques.completada };
            }
            return tasques;
        });
        setTasques(TascActual);
    };

    return (
        <div>
          <h1>Mis tareas</h1>
          <Formulari funcAfegirTasca={afegirTasca} />
          <ul>
            {tasques.map((tasca, index) => (
              <li key={index}>
                {tasca.text}
                <button onClick={() => completarTasca(index)}>
                  Completar
                </button>
                <button onClick={() => eliminarTasca(index)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
export default LlistatTasques;