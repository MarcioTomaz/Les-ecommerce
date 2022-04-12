


import React from "react";
import { withRouter } from "react-router-dom";
import CartService from "../../../service/client/cartService";
import CreditCardRegisterService from "../../../service/creditCardRegisterService";
import LocalStorageService from "../../../service/localStorageService";

import OrderService from "../../../service/order/orderService";
import CartListItemsOrder from "../../admin/Product/cart/cartListItemsOrder";
import CrediCardListTableOrder from "../../creditCard/crediCardListTableOrder";


class OrderStepPayment extends React.Component{

    state = {
        listOrders: [],
        creditCards: [],
    }

    constructor(){
        super();
        this.service = new OrderService();
        this.creditCardService = new CreditCardRegisterService();
        this.cartService = new CartService();
    }

    componentDidMount(){
                
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       
        const userId = loggedUser.id;

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
    }//fim dit mount

    selectCard = (crediCardId) => {
        console.log('crediCardId', crediCardId)
    }
    
    cardToPay = (cardId) =>{
        let teste = document.getElementById('1');

        teste.setAttribute('type', 'hidden');
        console.log("CARTAO PRA PAGAa", cardId);

        
        teste.setAttribute('type', 'number');
    }

    render(){
        return(
            <>

                <section className=" card px-5 py-5 mx-5 my-5">

                     <div className="card-body">

                        <div className="container">
                            <CartListItemsOrder
                            cartList={this.state.listOrders}
                            removeCart={this.removeItem} />  
                        </div>

                           <div className="container">
                            <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>

                            <h5 className="mt-4 mb-3 text-center">Cartões cadastrados</h5>                          
                            <CrediCardListTableOrder 
                                creditCards={this.state.creditCards} 
                                // selectCard={this.selectCard}
                                cardToPay={this.cardToPay} />
                        </div>

                    </div>

                </section>
            </>
        )
    }
}

export default withRouter(OrderStepPayment)