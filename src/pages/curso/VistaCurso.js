import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Ruta from '../../components/vistaCurso/Ruta'
import Tema from '../../components/vistaCurso/Tema'
import Unidad from '../../components/vistaCurso/Unidad'
import './estilosVU.css'
import CrearUnidad from '../opcionesCurso/CrearUnidad'
import UnidadTema from '../opcionesCurso/UnidadTema'
import TemaRecurso from '../opcionesCurso/TemaRecurso'
import { useParams } from 'react-router'
import Recurso from '../../components/vistaCurso/Recurso'
import OpcionesRecurso from '../opcionesCurso/OpcionesRecurso'

const VistaCurso = (props) => {
    useEffect(() => {
        buscarCurso()
    },[])
    const [infoCurso, setinfoCurso] = useState([])
    const buscarCurso=()=>{
        axios.get(`http://localhost:4000/curso/infocurso/${props.match.params.idcurso}`).then((response)=>{
            setinfoCurso(response.data);
        })
    }
   //------------------------------------------------------------------------------
     //unidad-cargarDatos
    const [ListaUnidad, setListaUnidad] = useState([])
    useEffect(() => {
        ListarUnidadCurso()
    }, []);
    //-----------------------------------------------------------------------------
    const ListarUnidadCurso=()=>{
        axios.get('http://localhost:4000/unidad/'+props.match.params.idcurso).
            then((response)=>{
                setListaUnidad(response.data);
        })
    };
    let numero=0
    // tema-cargardatos
    const [ListarTemas, setListarTemas] = useState([])
    useEffect(() => {
        ListarTemasCurso()
    }, []);
    const ListarTemasCurso=()=>{
        axios.get('http://localhost:4000/tema/'+props.match.params.idcurso).
        then((respuesta)=>{
            setListarTemas(respuesta.data);
        })
    };

    // recurso-cargardatos
    const [Listarrecursos, setListarrecursos] = useState([])
    useEffect(() => {
        ListarrecursosCurso()
    }, []);
    const ListarrecursosCurso=()=>{
        axios.get('http://localhost:4000/recurso/'+props.match.params.idcurso).
        then((respuesta)=>{
            setListarrecursos(respuesta.data);
        })
    };
    return (
            <>
            <Ruta
                idcurso={props.match.params.idcurso}
            />
            <div className="container shadow-card p-4">
                <div className="curso">
                    {infoCurso.map((val)=>{
                        return(
                            <>
                                <p className="nombre-curso">Curso: {val.nombre}</p>
                                {parseInt(localStorage.idpersona)==val.idpersona?
                                    <CrearUnidad 
                                        idCurso={val.idCurso}
                                        ListarUnidadCurso={ListarUnidadCurso}
                                    />
                                :null   
                            }
                            </>
                        )
                    })}
                </div>
                {ListaUnidad.map((valUnidad)=>{
                    return(
                        <>
                            <div className="unidad">
                            <Unidad
                            nombre={valUnidad.nombre}
                            unidad={++numero}
                            />
                            {parseInt(localStorage.idpersona)==infoCurso[0].idpersona?
                            <UnidadTema
                                idUnidad={valUnidad.idUnidad}
                                idCurso={props.match.params.idcurso}
                                ListarUnidadCurso={ListarUnidadCurso}
                                ListarTemasCurso={ListarTemasCurso}
                            />:null}    
                            </div>
                            {ListarTemas.map((valTema)=>{
                                if(valUnidad.idUnidad==valTema.idUnidad){
                                    return(
                                        <>
                                            <div className="tema">
                                                <Tema
                                                    nombre={valTema.nombre}
                                                />
                                                {parseInt(localStorage.idpersona)==infoCurso[0].idpersona?
                                                <TemaRecurso
                                                    idUnidad={valUnidad.idUnidad}
                                                    nombreTema={valTema.nombre}
                                                    idTema={valTema.idTema}
                                                    ListarTemasCurso={ListarTemasCurso}
                                                />:null}
                                            </div>
                                            {Listarrecursos.map((valRecurso)=>{
                                                if(valTema.idTema==valRecurso.idTema){
                                                    return(
                                                        <>
                                                            <div className="recurso">
                                                                <Recurso
                                                                    nombre={valRecurso.nombre}
                                                                    url={valRecurso.archivo}
                                                                />
                                                                {parseInt(localStorage.idpersona)==infoCurso[0].idpersona?
                                                                <OpcionesRecurso
                                                                />:null}
                                                            </div>
                                                        </>

                                                    )
                                                }
                                            })}
                                        </>
                                    )
                                }
                            })}
                        </>
                    )
                })}
                
            </div>
            </>
    )
}

export default VistaCurso
