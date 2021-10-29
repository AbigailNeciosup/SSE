import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const FormEditarTema = (props) => {
    const {modalTema,toggleTema,onChange,onClick,infoTema}=props
    return (
        <>
            <Modal show={modalTema} onHide={toggleTema} centered>
                <Modal.Header closeButton className="text-center">
                    Editar Tema
                </Modal.Header>
                <Modal.Body>                    
                   <Form>
                        <Form.Group>
                        <Form.Label>Nombre del tema</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name='nombre'
                                    placeholder="tema" 
                                    autoComplete="off"
                                    defaultValue={infoTema.nombre}
                                    onChange={onChange}
                                />
                        </Form.Group>
                    </Form> 
                </Modal.Body>
                <Modal.Footer>
                    <Button block className="celeste" onClick={onClick} >
                        Editar Tema
                    </Button>   
                </Modal.Footer>
            </Modal>   
        </>
    )   
}

export default FormEditarTema
