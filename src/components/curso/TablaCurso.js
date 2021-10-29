import React, { useState } from 'react'
import { Col, Row, Tab, Tabs } from 'react-bootstrap'
import CardCursoC from './CardCursoC'
import CardCursoM from './CardCursoM'

const TablaCurso = (props) => {
  const [key, setKey] = useState('inicio');
    return (
      <React.Fragment>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            {props.ListaCursosMatriculados.length!=0?
            <Tab eventKey="inicio" title="Cursos Matriculados" key='1'>
              <Row xs={1} md={2} lg={3}>
                  {props.ListaCursosMatriculados.map((val) => (
                    <Col sm={6} className="pb-4">
                      <CardCursoM
                        idCurso={val.idCurso}
                        nombre={val.nombre} 
                        descripcion={val.descripcion} 
                        url={'/principal/curso/'}
                      />
                    </Col>
                  ))}
                </Row>
            </Tab>:null}
            {props.ListaCursosCreado.length!=0?
              <Tab eventKey="profile" title="Cursos Creados" key='2'>
                  <Row xs={1} md={2} lg={2} xl={3}>
                      {props.ListaCursosCreado.map((val) => (
                        <Col sm={6}  className="pb-4">
                          <CardCursoC
                            idCurso={val.idCurso}
                            nombre={val.nombre}
                            descripcion={val.descripcion}
                            clave={val.clave}
                            url={'/principal/curso/'}
                          />
                        </Col>
                      ))}
                    </Row>
              </Tab>:null}
          </Tabs>
      </React.Fragment>
    )
}

export default TablaCurso
