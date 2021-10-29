import React from 'react'
import { Card, Nav } from 'react-bootstrap'
import {  FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';

const CardCursoM = (props) => {
    return (
     <React.Fragment>
         <Card className="text-center shadow-card h-100"  key={props.idCurso}>
            <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            
            <Card.Text>
            {props.descripcion}
            </Card.Text>
            
            <Nav.Link>
                
                <FaTrashAlt className="eliminar"/>
            </Nav.Link>
            </Card.Body>
            
            <Card.Footer>
            <Link to={`${props.url}${props.idCurso}`} exact={`exact`}>
            Ir al curso
            </Link>
            {/* ir al Curso */}
            </Card.Footer>
        </Card>
     </React.Fragment>   
    )
}

export default CardCursoM
