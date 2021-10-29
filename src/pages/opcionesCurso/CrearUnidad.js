import axios from 'axios';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import FormCrearUnidad from '../../components/opcionesCurso/FormCrearUnidad';
 
const CrearUnidad = (props) => {
    const [modalUnidad, setModalUnidad] = useState(false)
    const toggleUnidad = () => setModalUnidad(!modalUnidad);  
    //crear unidad
    const [ Unidad, setUnidad ] = useState({
        nombre: '',
        descripcion: '',
        idCurso:props.idCurso
    });
    const handleChangeUnidad = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setUnidad({
            ...Unidad,
            [nombre]: valor
        });
    }
    //valdiar Campos
    const [validatedUnidad, setValidatedUnidad] = useState(false);
    const CrearUnidad= async (event)=>{
        event.preventDefault();
        if(Unidad.nombre.length!=0 && Unidad.descripcion.length!=0){
            console.log('campo llenos');
            try {
                const nuevaUnidad= await axios.post('http://localhost:4000/unidad/save',Unidad)
                console.log(nuevaUnidad); 
                props.ListarUnidadCurso()
                toggleUnidad()  
                console.log('crear unidad');   
            } catch (error) {
                console.log(error.message);
                alert("Error al agregar");  
            }
        }
         
    }
    return (
        <div>
            <Button onClick={toggleUnidad} variant='link'>+ Unidad</Button>
            <FormCrearUnidad
            modalUnidad={modalUnidad}
            toggleUnidad={toggleUnidad}
            onChange={handleChangeUnidad}
            onClick={CrearUnidad}
            />
        </div>
    )
}

export default CrearUnidad
