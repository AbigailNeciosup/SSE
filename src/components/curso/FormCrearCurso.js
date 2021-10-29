import React from 'react'
import {Modal, Form, Button } from 'react-bootstrap'
import './estiloscurso.css'

const FormCrearCurso = (props) => {
    const {className,curso,onChange,onClick,validated} = props;
    return (
        <React.Fragment>
          {/* Crear un Curso */}                    
        <Modal show={props.modalCrear} onHide={props.toggleCrear} className={className}  centered 
            onExiting={()=>{props.setValidated(false) 
                // console.log('saliendo'); 
                curso.nombre=''
                curso.descripcion=''}} 
        >
            <Modal.Header closeButton>Crear Curso </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <Form.Group>
                            <Form.Label>Curso</Form.Label>
                            <Form.Control 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Curso"
                                    autoComplete='off'
                                    // value={curso.nombre}
                                    onChange={onChange}
                                    required
                            />
                            <Form.Control.Feedback type="invalid">
                                    El campo nombre está vacío.
                            </Form.Control.Feedback>            
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                    type="textarea" 
                                    name="descripcion" 
                                    placeholder="Descripcion"
                                    autoComplete='off'
                                    // value={curso.descripcion}
                                    onChange={onChange}
                                    required
                            />
                            <Form.Control.Feedback type="invalid">
                                    El campo descripción está vacío.
                                </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button className="celeste" block onClick={onClick}>Guardar</Button>
            </Modal.Footer>
        </Modal> 
        </React.Fragment>
    )
}

export default FormCrearCurso
