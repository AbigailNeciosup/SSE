import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const FormCrearRecurso = (props) => {
    const {modalRecurso,toggleRecurso,onChange,onClick,setSelectedFile}=props
    // const [vigencia, setvigencia] = useState(2)
    return (
        <>
            <Modal show={modalRecurso} onHide={toggleRecurso} centered>
                <Modal.Header closeButton className="text-center">
                    Crear Recurso
                </Modal.Header>
                <Modal.Body>                    
                   <Form>
                        <Form.Group>
                            <Form.Label>Nombre del Recurso</Form.Label>
                            <Form.Control 
                                type="text" 
                                name='nombre'
                                placeholder="Nombre del Recurso" 
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Form.Group>

                        <Form.Group>
                        <Form.Label>Fecha del Recurso</Form.Label>
                            <Form.Control 
                                type="date" 
                                name='fecha'
                                placeholder="Nombre del Recurso" 
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Sube un archivo</Form.Label>
                            {/* <Form.Control 
                                type="file" 
                                name="archivo"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            /> */}
                            <Form.Control 
                                type="url" 
                                name='archivo'
                                placeholder="url del Recurso" 
                                autoComplete="off"
                                onChange={onChange}
                            />
                        </Form.Group>
                        <Form.Group style={{display: "flex",justifyContent:"space-around"}} >
                        <Form.Label>Estado del recurso</Form.Label>
                            <Form.Check 
                                disabled
                                label='habilitado'
                                name="vigencia"
                                value="2"
                                type='radio'
                                id='activo'
                                // checked={vigencia==2?true:false}
                                onChange={onChange}
                            />
                            <Form.Check 
                                disabled
                                label='inhabilitado'
                                name="vigencia"
                                value="1"
                                type='radio'
                                id='inactivo'
                                checked={true}
                                // checked={vigencia==1?true:false}
                                onChange={onChange}
                            />
                        </Form.Group>
                    </Form> 
                </Modal.Body>
                <Modal.Footer>
                    <Button block className="celeste" onClick={onClick} >
                        Crear Recurso
                    </Button>   
                </Modal.Footer>
            </Modal>   
        </>
    )
}

export default FormCrearRecurso
