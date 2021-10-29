import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const FormEditarUnidad = (props) => {
    const{modalUnidad,toggleUnidad,infoUnidad,onChange,onClick}=props
    return (
        <React.Fragment>
            <Modal show={modalUnidad} onHide={toggleUnidad} centered>
                <Modal.Header closeButton>Editar Unidad</Modal.Header>
                <Modal.Body>                                        
                    <Form >
                        <Form.Group>
                            <Form.Label>Unidad</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='nombre'
                                placeholder="Unidad" 
                                value={infoUnidad.nombre}
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
                                placeholder="descripcion"  
                                value={infoUnidad.descripcion}  
                                placeholder="Descripción"    
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
                        Actualizar
                    </Button>  
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default FormEditarUnidad
