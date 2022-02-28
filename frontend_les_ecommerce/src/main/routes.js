
import { render } from '@testing-library/react';
import React from 'react';

import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './home';

import UserRegistration from '../views/user/userRegistration';

import Login from './login';

import ClientManagement from '../views/user/clientManagement';
import ClientDetails from '../views/user/clientDetails';
import EditClientData from '../views/user/editClientData';
import ChangePassword from '../views/user/changePassword';
import NewAddress from '../views/user/newAddress';
import CreditCardList from '../views/user/creditCardList';
import CreditCardRegister from '../views/user/creditCardRegister';
import AddressList from '../views/user/addressList';
import CouponList from '../views/user/couponList';

function Routes(){


        return(
            <HashRouter>

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/register" component={UserRegistration} />
                <Route path="/login" component={Login} />
                <Route path="/meusDados" component={ClientManagement} />
                <Route path="/perfilDetalhes" component={ClientDetails} />
                <Route path="/editarCliente" component={EditClientData} />
                <Route path="/alterarSenha" component={ChangePassword} />
                <Route path="/novoEndereco" component={NewAddress} />
                <Route path="/cartoes" component={CreditCardList} />
                <Route path="/cadastrarCartao" component={CreditCardRegister} />
                <Route path="/listaEndereco" component={AddressList}/>
                <Route path="/listaCupom" component={CouponList}/>
                
    
            </Switch>
    
        </HashRouter>
        )
   
    
}

export default Routes;