import React, { useState } from "react";
import { RiDeleteBinLine } from 'react-icons/ri';
import { MdOutlineTaskAlt } from "react-icons/md";
import './Styles/Tasca.css'

const Tasca = ({ id, text, completada, completarTasca, eliminarTasca }) => {
    return (
        <div className={completada ? 'tascaCompletada tasca' : 'tasca'}>
            <span>{text}</span>
            <span className="spanBoto">
                <button className="botoTasca" onClick={() => completarTasca(id)}><MdOutlineTaskAlt /></button>
                <button className="botoTasca" onClick={() => eliminarTasca(id)}><RiDeleteBinLine /></button>
            </span>
        </div>
    );
};

export default Tasca;