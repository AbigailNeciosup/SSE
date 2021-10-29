import React from 'react'
import { Nav } from 'react-bootstrap';
import { MdOutlineAdjust } from "react-icons/md";

const Recurso = (props) => {
    return (
            <div className="seccion-recurso">
                <Nav.Link href={props.url} target="_blank">
                    Recurso: {props.nombre}
                </Nav.Link>
            </div>
    )
}

export default Recurso
