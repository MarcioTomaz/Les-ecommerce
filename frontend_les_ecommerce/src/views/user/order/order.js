


import React from "react";
import { withRouter } from "react-router-dom";
import CreditCardRegisterService from "../../../service/creditCardRegisterService";
import LocalStorageService from "../../../service/localStorageService";
import NewAddressService from "../../../service/newAddress";
import OrderService from "../../../service/order/orderService";
import AddressListTableOrder from "../../address/addressListTableOrder";
import CrediCardListTable from "../../creditCard/crediCardListTable";
import CrediCardListTableOrder from "../../creditCard/crediCardListTableOrder";
import creditCardList from "../../creditCard/creditCardList";
import CartService from "../../../service/client/cartService";
import CartListItemsOrder from "../../admin/Product/cart/cartListItemsOrder";

class Order extends React.Component{

    state = {
       addressList: [],
       creditCards: [],
       listOrders:[]
    }

    constructor(){
        super(); 
        this.service = new OrderService();
        this.addressService = new NewAddressService();
        this.creditCardService = new CreditCardRegisterService();
        this.cartService = new CartService();
    }

   componentDidMount(){

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       
        const userId = loggedUser.id;

        this.addressService.getAllAddress(userId)
            .then( response => {
                this.setState({
                    addressList: response.data
                })
            })
            
        this.creditCardService.getAllCreditCards(userId)
        .then( response => {
            console.log('credit cards', response.data)
            this.setState({
                creditCards: response.data
            })
        })

        this.cartService.getCart(userId)
            .then( response => {
                console.log('carrinho', response.data)

                this.setState({
                    listOrders: response.data
                })

            })
    }


    selectCard = (crediCardId) => {
        console.log('crediCardId', crediCardId)
    }

    selectBillingAddress = (addressId) =>{
        console.log('addresId billing', addressId)
    }

    selectDeliveryAddress = (addressId) =>{
        console.log('addresId selectDeliveryAddress', addressId)
    }

    render(){
        return(
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                <div className="card-body">                        {/* <CardComponent />                    */}

                    <div className="container">

                        <h4 className="card-body">Itens</h4>
                        <CartListItemsOrder 
                            cartList={this.state.listOrders}
                        />
                        <h4 className="card-body">Total a pagar: R$ diero</h4>


                    </div>

                        <div className="container">
                            <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>

                            <h5 className="mt-4 mb-3 text-center">Cartões cadastrados</h5>                          
                            <CrediCardListTableOrder 
                                creditCards={this.state.creditCards} 
                                selectCard={this.selectCard} />
                        </div>

                        <div className="container">

                            <div className="container">
                                <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a>
                                <h5 className="mt-4 mb-3 text-center">Lista - Endereços </h5>

                                <AddressListTableOrder 
                                    addressList={this.state.addressList} 
                                    selectBillingAddress={this.selectBillingAddress}
                                    selectDeliveryAddress={this.selectDeliveryAddress}
                                />
                            </div>

                        </div>
                    </div>

                    <a href="#/meusDados" className="col-1 btn btn-secondary " >Voltar</a>
                </section>
            </>
        )
    }



}

export default withRouter(Order)