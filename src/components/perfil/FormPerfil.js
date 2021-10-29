import React  from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';

const FormDatUsuario = ({
        usuario,
        onClick,
        onChange,
        validated
    }) => { 
    return (
    <div className="container"> 
        <Form noValidate validated={validated}>
            <Form.Group>
                <Form.Label>Nombres</Form.Label>
                <Form.Control 
                    type="text" 
                    name="nombre" 
                    placeholder="Nombre"  
                    autoComplete="off"
                    value= {usuario.nombre}
                    onChange={onChange}
                />            
            </Form.Group>
            <Form.Control.Feedback type="invalid">
                El campo nombre está vacío.
            </Form.Control.Feedback>                  
            <Form.Group>
                <Form.Label>Apellidos</Form.Label>
                <Form.Control 
                    type="text" 
                    name="apellido" 
                    id="input-nombre-apellidos" 
                    placeholder="Apellidos" 
                    autoComplete="off"
                    value={usuario.apellido}
                    onChange={onChange}    
                    />            
            </Form.Group>
            <Form.Group>
                <Form.Label>Sexo</Form.Label>
                    <div style={{display: "flex",justifyContent: "space-around"}}>
                    <Col sm={10}>
                    <Form.Check
                        type="radio"
                        label="Femenino"
                        name="sexo"
                        value="0"
                        checked={usuario.sexo === '0'}
                        // checked={true}
                        onChange={onChange}
                        />
                        <Form.Check
                        type="radio"
                        label="Masculino"
                        name="sexo"
                        value="1"
                        // checked={usuario.sexo === '1'}
                        // checked={false}
                        onChange={onChange}
                        />
                        <p>{usuario.sexo}</p>
                    </Col>                                            
                    </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control 
                    type="date" 
                    name="fechaNacimiento" 
                    id="input-fecha-nacimiento"
                    onChange={onChange}    
                    value={usuario.fechaNacimiento}
                />            
            </Form.Group>
            <Form.Group>
                <Form.Label>DNI</Form.Label>
                <Form.Control 
                    type="number" 
                    name="dni" 
                    id="input-dni" 
                    autoComplete="off"
                    onChange={onChange}    
                    value={usuario.dni}
                    />            
            </Form.Group>
                <Row className="mt-3">
                    <Col style={{textAlign:"end"}}>
                        <Button 
                            block 
                            onClick={onClick}
                            to="/principal/my">
                            Actualizar
                        </Button>                                                              
                    </Col>
                </Row>
        </Form>                
    </div>
    );
};

export default FormDatUsuario;
