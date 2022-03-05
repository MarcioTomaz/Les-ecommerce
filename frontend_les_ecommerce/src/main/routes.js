
import { render } from '@testing-library/react';
import React from 'react';

import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import Home from './home';

import UserRegistration from '../views/user/userRegistration';

import Login from './login';

import ClientManagement from '../views/user/clientManagement';
import ClientDetails from '../views/user/clientDetails';
import EditClientData from '../views/user/editClientData';
import ChangePassword from '../views/user/changePassword';
import NewAddress from '../views/address/newAddress';
import CreditCardList from '../views/user/creditCardList';
import CreditCardRegister from '../views/user/creditCardRegister';
import AddressList from '../views/address/addressList';
import CouponList from '../views/user/couponList';
import AuthService from '../service/authService';

function AuthenticateRoute( {component: Component, ...props} ){//qbrando a props e pegando os componentes
    return(
        <Route {...props} render={ (componentProps) => {
            if(AuthService.isAuthenticateClient()){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return (
                    <Redirect to={{pathname: '/login', state: { from: componentProps.location}}} />
                )
            }
        } } />
    )
}

function Routes(){

        return(
            <HashRouter>

            <Switch>

                <Route path="/login" component={Login} />
                <Route path="/register" component={UserRegistration} />

                <AuthenticateRoute path="/home" component={Home} />
                                
                <AuthenticateRoute path="/meusDados" component={ClientManagement} />
                <AuthenticateRoute path="/perfilDetalhes" component={ClientDetails} />
                <AuthenticateRoute path="/editarCliente" component={EditClientData} />
                <AuthenticateRoute path="/alterarSenha" component={ChangePassword} />
                <AuthenticateRoute path="/novoEndereco" component={NewAddress} />
                <AuthenticateRoute path="/cartoes" component={CreditCardList} />
                <AuthenticateRoute path="/cadastrarCartao" component={CreditCardRegister} />
                <AuthenticateRoute path="/listaEndereco" component={AddressList}/>
                <AuthenticateRoute path="/listaCupom" component={CouponList}/>
                
    
            </Switch>
    
        </HashRouter>
        )
    
}

export default Routes;