import React, { useState } from "react";
import Tasca from './Tasca';
import FormulariTasques from "./FormulariTasques";

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
          <FormulariTasques funcAfegirTasca={afegirTasca} />
            {tasques.map((tasca, index) => (
              <Tasca
                key={index}
                id={index}
                text={tasca.text}
                completada={tasca.completada}
                completarTasca={completarTasca}
                eliminarTasca={eliminarTasca}
              />
            ))}
        </div>
      );
    }
    
export default LlistatTasques;