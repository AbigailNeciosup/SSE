import React, { useEffect, useState } from 'react'
import axios from 'axios';
import TablaCurso from '../../components/curso/TablaCurso';
import FormCrearCurso from '../../components/curso/FormCrearCurso';
import BotonCurso from '../../components/curso/BotonCurso';
import md5 from 'md5';
import FormUnirCurso from '../../components/curso/FormUnirCurso';

const ListaCurso = () => {
    const idpersona = parseInt(localStorage.idpersona)
    const [ListaCursos, setListaCursos] = useState([])
    const [ListaCursosMatriculados, setListaCursosMatriculados] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:4000/curso/${idpersona}`).then((response)=>{
          setListaCursos(response.data);
      })       
      
    }, []);
    const ListarCC=()=>{
        axios.get(`http://localhost:4000/curso/${idpersona}`).then((response)=>{
            setListaCursos(response.data);  
    })}
    useEffect(() => {
      ListarCM()
    }, [])
    const ListarCM=()=>{
    axios.get(`http://localhost:4000/matricula/listar/${idpersona}`).then((response)=>{
        setListaCursosMatriculados(response.data);
    })
    }
    //-------------------------------------------------------------------------------------------------------------//
    //                                                   Crear Curso
    //-------------------------------------------------------------------------------------------------------------//
    //btnOpcionCurso-crear
    const [modalCrear, setModalCrear] = useState(false);
    const toggleCrear = () => setModalCrear(!modalCrear);

    //crear-Curso
    const [ Curso, setCurso ] = useState({
        nombre: '',
        descripcion: '',
        idpersona:idpersona,
        clave:''
    });
    const handleChangeCurso = (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        setCurso({
            ...Curso,
            [nombre]: valor
        });
    }
    //valdiacion-CrearCurso
    const [validated, setValidated] = useState(false);
    const crearNuevoCurso = async (event) => {
        event.preventDefault();
        if(Curso.nombre.length!=0 && Curso.descripcion.length!=0){
            // console.log('campo llenos');
            try {
                    Curso.clave=md5(idpersona+Curso.nombre)
                    const nuevoCurso = await axios.post('http://localhost:4000/curso/save', Curso);
                    console.log(nuevoCurso);
                    ListarCC()
                    toggleCrear()
                    // console.log('guardado');
                    Curso.nombre=''
                    Curso.descripcion=''

            } catch (error) {
                console.log(error.message);
                alert("Error al agregar");
            }
        }else{
            setValidated(true);
            console.log('error');
        }
    }
    //-------------------------------------------------------------------------------------------------------------//
    //                                                    Matricularse a un cruso                                  //
    //-------------------------------------------------------------------------------------------------------------//
    //btnOpcionCurso-Unir
    const [modalUnir, setModalUnir] = useState(false);
    const toggleUnir = () => setModalUnir(!modalUnir);
    //clave de verificacion
    const [claveVerificacion, setclaveVerificacion] = useState({
        codigo:''
    })
    // listado de errores
    const [error, seterror] = useState('')
    const handleChangecodigo= (event) => {
        const target = event.target;
        const valor = target.value;
        const nombre = target.name;
        seterror('')
        setclaveVerificacion({
            ...claveVerificacion,
            [nombre]: valor
        });
    }
    // validar codigo
    const [validatedcodigo, setValidatedcodigo] = useState(false);

    const buscarCurso= (event)=>{
        seterror('')
            event.preventDefault();
            if(claveVerificacion.codigo.length!=0){
                // console.log('campo llenos '+ claveVerificacion.codigo);
                try {
                    axios.get(`http://localhost:4000/curso/buscar/`+claveVerificacion.codigo)
                    .then((resp)=>{
                        if(resp.data[0]===undefined){
                            seterror('Código incorrecto.')
                        }else{  
                            console.log(resp.data[0].idpersona);
                            // console.log(idpersona);
                            if (resp.data[0].idpersona==idpersona){
                                seterror('No puedes matricularte en un curso que has creado.')
                            }else{
                                axios.get(`http://localhost:4000/matricula/buscar/`+ idpersona+'/'+resp.data[0].idCurso).
                                then((sql)=>{
                                    if(sql.data[0]===undefined){
                                        axios.post('http://localhost:4000/matricula/save',
                                        {
                                            descripcion:'',
                                            idpersona:idpersona,
                                            idcurso:resp.data[0].idCurso,
                                            vigencia:2
                                        })
                                        ListarCM()
                                        toggleUnir()    
                                        // console.log('te puedes matricular');
                                    }else{
                                        seterror('Ya estás matriculado en este curso.');
                                    }
                                })
                            }
                        }

                    })
                    // console.log('guardado');    
                } catch (error) {
                    console.log(error.message);
                    alert("Error al agregar");
                }
            }else{
                setValidatedcodigo(true);
                console.log('error');
                seterror('El campo código está vacío.')
            }
   }
    return (
            <>
                <BotonCurso toggleCrear={toggleCrear} modalCrear={modalCrear} toggleUnir={toggleUnir}/>
                <FormCrearCurso 
                    toggleCrear={toggleCrear} 
                    modalCrear={modalCrear}
                    curso={Curso}
                    onChange={handleChangeCurso}
                    onClick={crearNuevoCurso}
                    validated={validated}
                    setValidated={setValidated}
                />
                <FormUnirCurso
                    toggleUnir={toggleUnir} 
                    modalUnir={modalUnir}
                    claveVerificacion={claveVerificacion}
                    onChange={handleChangecodigo}
                    onClick={buscarCurso}
                    validated={validatedcodigo}
                    setValidated={setValidatedcodigo}
                    error={error}
                />
                <TablaCurso
                    ListaCursosMatriculados={ListaCursosMatriculados}
                    ListaCursosCreado={ListaCursos}
                /> 
            </> 
    )
}

export default ListaCurso
