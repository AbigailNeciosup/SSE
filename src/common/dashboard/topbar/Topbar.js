import React from 'react'
import { FcMenu } from "react-icons/fc";
const estilo = {margin: '0px'}

const Topbar = () => {
        let firstName =  localStorage.nombre;    
        let firstFoto =  localStorage.foto;   
    return (
        
        <div className="topbar__contenedor">
            <h2>
                <label htmlFor="nav-toggle" className="fcMenu" id="topbarmenu">
                    <span><FcMenu/></span>
                </label>
                SSE 
            </h2>
            <div className="topbar__user-wrapper">
                <img src={firstFoto} width="40px" height="40px" alt=""/>
                <div>
                    <h4 style={estilo}>{firstName}</h4>
                    <small>Usuario</small>
                </div>
            </div>
        </div>
    )
}

export default Topbar
