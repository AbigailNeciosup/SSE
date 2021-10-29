import React from 'react'
import { Card, Form, Nav } from 'react-bootstrap'
import {FaTrashAlt,FaEdit} from "react-icons/fa";
import { Link } from 'react-router-dom';

const CardCursoC = (props) => {
    return (
        <Card className="text-center shadow-card h-100" key={props.idCurso}>
            <Card.Body>
            <Form>
                    <Form.Check 
                    type="switch"
                    id={"custom-switch"+props.idCurso}
                    label="Publicar"
                    />
                </Form>
                <Card.Title >
                    {props.nombre}
                </Card.Title>                
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
                <Card.Title>
                    Código de Curso
                </Card.Title>
                <Card.Text>
                    {props.clave}
                </Card.Text>
                <Nav.Link>
                    <FaEdit className="editar"/> 
                    <FaTrashAlt className="eliminar"/>
                </Nav.Link>
            </Card.Body>
            <Card.Footer>
            <Link to={`${props.url}${props.idCurso}`} exact={`exact`}>
                Ir al curso
            </Link>
            </Card.Footer>
        </Card>
    )
}

export default CardCursoC
