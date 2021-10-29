import React from 'react'
import './estilos.css'
import Main from './contenedor/Main'
import Sidebar from './sidebar/Sidebar'
import Topbar from './topbar/Topbar'
const Dashboard = () => {
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <Sidebar/>
            <div className="main-content">
                <Topbar/>
                <Main/>
            </div>
        </div>
    )
}

export default Dashboard
