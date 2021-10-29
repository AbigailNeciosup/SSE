import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FaEllipsisH } from "react-icons/fa";

const BtnUnidadTema = (props) => {
    const{toggleUnidad,toggleTema}=props
    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" bsPrefix>
            <FaEllipsisH/>  
            </Dropdown.Toggle>
            <Dropdown.Menu  className="center shadow-card">
                <Dropdown.Item onClick={toggleUnidad}>
                    Editar unidad
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleTema}>
                    Crear tema
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default BtnUnidadTema
