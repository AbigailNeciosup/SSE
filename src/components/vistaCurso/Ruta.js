import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const Ruta = (props) => {
    return (
        <React.Fragment>
            <Breadcrumb>
                <Breadcrumb.Item href="/principal/my">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="/principal/curso">Curso</Breadcrumb.Item>
                <Breadcrumb.Item active>{props.idcurso}</Breadcrumb.Item>
            </Breadcrumb>
        </React.Fragment>
    )
}

export default Ruta
