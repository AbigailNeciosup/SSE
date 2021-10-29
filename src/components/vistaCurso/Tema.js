import React from 'react'
import { MdOutlineAdjust } from "react-icons/md";

const Tema = (props) => {
    return (
        <div className="seccion-unidad">
            <MdOutlineAdjust/>
            <div>
                Tema: {props.nombre}
            </div>
        </div>
    )
}

export default Tema
