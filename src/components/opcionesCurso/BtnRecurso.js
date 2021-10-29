import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaEllipsisH } from "react-icons/fa";

const BtnRecurso = (props) => {
    const{toggleRecurso1,toggleRecurso}=props
    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" bsPrefix>
            <FaEllipsisH/>  
            </Dropdown.Toggle>
            <Dropdown.Menu  className="center shadow-card">
                <Dropdown.Item onClick={toggleRecurso}>
                    Editar Recurso
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleRecurso}>
                   Eliminar Recurso
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default BtnRecurso
