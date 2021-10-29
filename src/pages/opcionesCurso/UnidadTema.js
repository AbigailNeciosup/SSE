import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BtnUnidadTema from '../../components/opcionesCurso/BtnUnidadTema'
import FormCrearTema from '../../components/opcionesCurso/FormCrearTema';
import FormEditarUnidad from '../../components/opcionesCurso/FormEditarUnidad';

const UnidadTema = (props) => {
   
    //-------------------------------------------------------------------------------------------------------------//
    //                                                 Unidad                                                      //
    //-------------------------------------------------------------------------------------------------------------//

    const [modalUnidad, setModalUnidad] = useState(false)
    const toggleUnidad = () => setModalUnidad(!modalUnidad);  
    // buscar unidad
    const [infoUnidad, setinfoUnidad] = useState({
        nombre: '',
        descripcion:''

    });
    const buscarInfoUnidad= async ()=>{
        const datos= await axios.get('http://localhost:4000/unidad/infoUnidad/'+props.idUnidad)
        console.log(datos.data[0]);
        setinfoUnidad({
            nombre: datos.data[0].nombre,
            descripcion:datos.data[0].descripcion
        });
    }
    const handleChangeUnidad = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setinfoUnidad({
            ...infoUnidad,
            [nombre]: valor
        });
    }
    const onClickUnidad=()=>{
        toggleUnidad()
        buscarInfoUnidad() 
    }
    //-------------------------------
    useEffect(() => {
        props.ListarUnidadCurso()
        // console.log(modalUnidad);
    }, [modalUnidad]) 
    //-----------------------------no genera errores---------------------------------------------------
    const EditarUnidad=()=>{
        axios.put('http://localhost:4000/unidad/actualizar/'+props.idCurso+'/'+props.idUnidad,infoUnidad)
        // console.log(props.idCurso);
        toggleUnidad()
        console.log('editar unidad');
    }
     //-------------------------------------------------------------------------------------------------------------//
    //                                                 tema                                                        //
    //-------------------------------------------------------------------------------------------------------------//
    const [modalTema, setModalTema] = useState(false)
    const toggleTema = () => {setModalTema(!modalTema)}

    const [infoTema, setinfoTema] = useState({
        nombre: '',
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
    const onClickTema=()=>{
        toggleTema()
    }
    //-------------------------------
    useEffect(() => {
        props.ListarTemasCurso()
        console.log(modalTema);
    }, [modalTema]) 
    //-----------------------------no genera errores---------------------------------------------------
    const CrearTema=()=>{
        axios.post('http://localhost:4000/tema/save',infoTema)
        props.ListarTemasCurso()
        toggleTema()
        console.log('guardar tema');
       };

    return (
        <>
            <BtnUnidadTema
            toggleUnidad={onClickUnidad}
            toggleTema={onClickTema}
            />
            <FormEditarUnidad
                toggleUnidad={toggleUnidad}
                modalUnidad={modalUnidad}
                infoUnidad={infoUnidad}
                onChange={handleChangeUnidad}
                onClick={EditarUnidad}
            />
            <FormCrearTema
                toggleTema={toggleTema}
                modalTema={modalTema}
                onChange={handleChangeTema}
                onClick={CrearTema}
            />
        </>
    )
}

export default UnidadTema
