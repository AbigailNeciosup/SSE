import React from "react";
import Dashboard from "./common/dashboard/Dashboard";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login";
import ReactGA from "react-ga";
import {createBrowserHistory} from 'history'

//Inicializamos React Ga
    const trackingId = "291726518"
    ReactGA.initialize(trackingId);

    const history = createBrowserHistory();

    history.listen(location =>{
      ReactGA.pageview(location.pathname);
    })


function App() {
  return (
    <BrowserRouter>
      <Switch>
        Inicio de Sesion
          <Route path="/" exact>
            <Login></Login>
          </Route>
        {/* Panel de Control (Dashboard) */}
          <Route path="/principal" history={history}>
            <Dashboard></Dashboard>
          </Route>
      </Switch> 
  </BrowserRouter>    
    
  );
}

export default App;
