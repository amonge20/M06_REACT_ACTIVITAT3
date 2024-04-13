import React, { useState } from "react";
import Tasca from './Tasca';
import FormulariTasques from "./FormulariTasques";

const LlistatTasques = props => {
    const [tasques, setTasques] = useState([]);
    
    // Afegir tasca
    const afegirTasca = tascaNova => {
        const TascActual = [...tasques, tascaNova]
        setTasques(TascActual);
    };

    // Eliminar tasca
    const eliminarTasca = (id) => {
      const newTasques = tasques.filter((value, index) => index != id);
      setTasques(newTasques);
    };

    // Completar tasca 
    const completarTasca = (id) => {
        const TascActual = tasques.map((tasques, tasca) => {
            if (tasca === id) {
              return { ...tasques, completada: true };
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