import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {FaPlus } from "react-icons/fa";


const BotonCurso = (props) => {
    return (
        <>
            <Dropdown className="pb-4 ">
            <Dropdown.Toggle className=" rounded-pill" id="dropdown-autoclose-true" bsPrefix>
                <FaPlus/> <span>Curso</span>
            </Dropdown.Toggle  >
            <Dropdown.Menu right='true' className="center shadow-card" >
                <Dropdown.Item onClick={props.toggleUnir}> Agregar un curso </Dropdown.Item>
                <Dropdown.Item onClick={props.toggleCrear}> Crear un curso </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default BotonCurso
