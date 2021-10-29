import React, { useState } from 'react'
import BtnRecurso from '../../components/opcionesCurso/BtnRecurso'

const OpcionesRecurso = () => {
    const [modalRecurso, setModalRecurso] = useState(false)
    const toggleRecurso = () => setModalRecurso(!modalRecurso);  
    return (
        <>
           <BtnRecurso
           /> 
        </>
    )
}

export default OpcionesRecurso
