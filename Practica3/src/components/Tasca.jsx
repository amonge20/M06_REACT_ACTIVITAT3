import React, { useState } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';

const Tasca = ({ id, text, completada, completarTasca, eliminarTasca }) => {
    return (
        <div className={completada ? 'tascaCompletada' : ''} onClick={() => completarTasca(id)}>
            <span>{text}</span>
            <button onClick={() => eliminarTasca(id)}><RiDeleteBinLine /></button>
        </div>
    );
};

export default Tasca;