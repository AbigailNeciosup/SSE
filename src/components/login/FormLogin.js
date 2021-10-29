import React from 'react'
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router';
import axios from 'axios';

const FormLogin = (props) =>{    
        const {history} = props;
        const respGoogle = (resp) => {     
            const googleId = resp.profileObj.googleId;
            const apellido = resp.profileObj.familyName;
            const nombre= resp.profileObj.givenName;
            const email = resp.profileObj.email;
            const urlFoto = resp.profileObj.imageUrl;
            localStorage.googleId = googleId;
            localStorage.nombre = nombre +' '+apellido;          
            localStorage.foto = urlFoto;
            axios.get(`http://localhost:4000/persona/buscar/${email}`)
            .then((resp)=>{                                
                if(resp.data[0]!=undefined){
                    localStorage.idpersona = resp.data[0].idpersona 
                    history.push("/principal")
        }else{
            if(resp.data[0] == undefined){                
                axios.post(`http://localhost:4000/persona/save`,
                {                                        
                    nombre: nombre,
                    apellido: apellido,
                    sexo: '',
                    fechaNacimiento:'',
                    dni:'',
                    email:email,
                    urlFoto: urlFoto,
                    googleId: googleId                    
                })
                history.push("/principal")   
                //console.log("Esta pasando")             
            }
        }
    })
}
    
    return(
        <React.Fragment>
            <div className="container-full">
                <div className="block-login">
                    <div className="content-login">
                        <div className="form">
                            <div className="logo">SSE</div>
                            <div className="texto">Sistema de Seguimiento al Estudiante</div>
                            <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>
                                <div className="login-centrar"> 
                                    <div className='btn-Google'>
                                        <GoogleLogin
                                            clientId="384585347881-sst30jjn9ceu0k7dkudd6tt601mm8g0g.apps.googleusercontent.com"
                                            buttonText="Iniciar sesión con Google"
                                            onSuccess={respGoogle}    
                                            onFailure={respGoogle}                                    
                                            cookiePolicy={'single_host_origin'}
                                            className="GoogleLogin" 
                                        />
                                    </div>                      
                                </div>                                   
                            </div>
                        </div>
                    </div>
                <div className="background-login"></div>
            </div>
        </React.Fragment>        
    )
}

export default withRouter(FormLogin)