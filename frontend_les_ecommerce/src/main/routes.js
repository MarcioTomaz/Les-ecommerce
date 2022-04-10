
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

import CreditCardList from '../views/creditCard/creditCardList';
import CreditCardRegister from '../views/creditCard/creditCardRegister'

import AddressList from '../views/address/addressList';
import CouponList from '../views/user/couponList';
import AuthService from '../service/authService';
import EditAddress from '../views/address/editAddress';
import adminManagement from '../views/admin/adminManagement';

import ClientListAdmin from '../views/admin/client/ClientListAdmin';
import NewProduct from '../views/admin/Product/newProduct';
import ProductList from '../views/admin/Product/productList';

import EditProduct from '../views/admin/Product/editProduct';

import ProductListClient from '../views/admin/Product/productListClient';

import Cart from '../views/admin/Product/cart/cart';

import ProductDetails from '../views/admin/Product/productDetails';

import NewCoupon from '../views/admin/coupon/newCoupon';

import CouponAdminList from '../views/admin/coupon/couponList';

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
                <AuthenticateRoute path="/editarEndereco/:id" component={EditAddress} />
                <AuthenticateRoute path="/cartoes" component={CreditCardList} />
                <AuthenticateRoute path="/cadastrarCartao" component={CreditCardRegister} />
                <AuthenticateRoute path="/listaEndereco" component={AddressList}/>
                <AuthenticateRoute path="/listaCupom" component={CouponList}/>
                <AuthenticateRoute path="/detalhesProduto/:id" component={ProductDetails}/>



                {/* Admin Routes */}

                <AuthenticateRoute path="/administracao" component={adminManagement}/>
                <AuthenticateRoute path="/listaCliente" component={ClientListAdmin}/>
                <AuthenticateRoute path="/novoProduto" component={NewProduct}/>
                <AuthenticateRoute path="/estoque" component={ProductList}/>
                <AuthenticateRoute path="/editarProduto/:id" component={EditProduct}/>
                <AuthenticateRoute path="/produtos/" component={ProductListClient}/>
                <AuthenticateRoute path="/carrinho/" component={Cart}/>
                <AuthenticateRoute path="/novoCupom/" component={NewCoupon}/>
                <AuthenticateRoute path="/listaAdminCupom/" component={CouponAdminList}/>


                

                
    
            </Switch>
    
        </HashRouter>
        )
    
}

export default Routes;