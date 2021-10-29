import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const FormCrearUnidad = (props) => {
    const{modalUnidad,toggleUnidad,titulo,onChange,onClick}=props
    return (
        <React.Fragment>
            <Modal show={modalUnidad} onHide={toggleUnidad} centered>
                <Modal.Header closeButton>Crear Unidad</Modal.Header>
                <Modal.Body>                                        
                    <Form >
                        <Form.Group>
                            <Form.Label>Unidad</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='nombre'
                                placeholder="Unidad" 
                                onChange={onChange}
                                required
                            /> 
                            <Form.Control.Feedback type="invalid">
                                Campo de nombre esta vacío.
                            </Form.Control.Feedback>            
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="descripcion"  
                                placeholder="Unidad"    
                                onChange={onChange}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Campo de descripcion esta vacío.
                            </Form.Control.Feedback>  
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block onClick={onClick}>
                        Crear
                    </Button>  
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default FormCrearUnidad
