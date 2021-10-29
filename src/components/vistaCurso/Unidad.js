import React from 'react'
import { MdOutlineAdjust } from "react-icons/md";

const Unidad = (props) => {
    return (
            <div className="seccion-unidad">
                <MdOutlineAdjust/>
                <div>
                    Unidad 0{props.unidad}: {props.nombre}
                </div>
            </div>
    )
}

export default Unidad
