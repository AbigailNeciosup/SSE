import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import BtnTemaRecurso from '../../components/opcionesCurso/BtnTemaRecurso'
import FormEditarTema from '../../components/opcionesCurso/FormEditarTema'
import FormCrearRecurso from '../../components/opcionesCurso/FormCrearRecurso'

const TemaRecurso = (props) => {
    //-------------------------------------------------------------------------------------------------------------//
    //                                                   tema
    //-------------------------------------------------------------------------------------------------------------//
    const [modalTema, setModalTema] = useState(false)
    const toggleTema = () => {setModalTema(!modalTema)}

    const [infoTema, setinfoTema] = useState({
        nombre:props.nombreTema,
        idUnidad:props.idUnidad,
        vigencia:2
    });
    const handleChangeTema = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setinfoTema({
            ...infoTema,
            [nombre]: valor
        });
    }
    useEffect(() => {
        props.ListarTemasCurso()
        console.log(modalTema);
    }, [modalTema]) 

    const EditarTema=()=>{
        axios.put(`http://localhost:4000/tema/actualizar/${props.idTema}`,infoTema)
        props.ListarTemasCurso()
        toggleTema()
        console.log('editar Tema');
    } 
    //-------------------------------------------------------------------------------------------------------------//
    //                                                   Crear recurso
    //-------------------------------------------------------------------------------------------------------------//
    const [modalRecurso, setModalRecurso] = useState(false)
    const toggleRecurso = () => {setModalRecurso(!modalRecurso)}

    const [recurso, setrecurso] = useState({
        nombre:'',
        fecha:'',
        archivo:'',
        idTema:props.idTema,
        estado:1,
        tipo:'url',
        vigencia:1
    });
    const handleChangeRecurso = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        console.log(valor);
        setrecurso({
            ...recurso,
            [nombre]: valor
        });
    }
    const CrearRecurso= async ()=>{
        try {
            const nuevaRecurso= await axios.post('http://localhost:4000/recurso/save',recurso)
            console.log(nuevaRecurso); 
            console.log('crear Recurso');
            console.log(recurso); 
        } catch (error) {
            console.log(error.message);
            alert("Error al agregar");  
        }
       
    }
   
    return (
        <>
            <BtnTemaRecurso
            toggleTema={toggleTema}
            toggleRecurso={toggleRecurso}
            />
            <FormEditarTema
                toggleTema={toggleTema}
                modalTema={modalTema} 
                infoTema={infoTema} 
                onChange={handleChangeTema} 
                onClick={EditarTema}
            />
            <FormCrearRecurso
                toggleRecurso={toggleRecurso}
                modalRecurso={modalRecurso} 
                onChange={handleChangeRecurso} 
                onClick={CrearRecurso}
            />
        </>
    )
}

export default TemaRecurso
