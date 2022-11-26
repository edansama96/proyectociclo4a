//Direccionamiento
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../login/login";
import Inicio from "../index/index";
import RegistroComprador from "../registro_comprador/registro_comprador";
import RegistroVendedor from "../registro_vendedor/registro_vendedor";


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/login"]} component={Login} />
                <Route exact path={["/"]} component={Inicio} />   {/* se enruta pagina de inicio*/}
                <Route exact path={["/index"]} component={Inicio} />   {/* se enruta pagina de inicio en index*/}
                <Route exact path={["/registro_comprador"]} component={RegistroComprador} />
                <Route exact path={["/registro_vendedor"]} component={RegistroVendedor} />
                <Route path={"*"} component={() => (
                    <h1 style={{ marginTop: 300 }}>
                        404
                        <br />
                        Página no encontrada
                    </h1>
                )} />

            </Switch>
        </Router>);
}


