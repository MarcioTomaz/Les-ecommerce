
import React from "react";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../../components/toastr";
import CartService from "../../../../service/client/cartService";
import CartListItems from "./cartListItems";
import LocalStorageService from "../../../../service/localStorageService";
import OrderService from "../../../../service/order/orderService";

class Cart extends React.Component{
 
    
    state = {
        listOrder: []
    }
    
    constructor(){
        super();
        this.service = new CartService();
        this.orderService = new OrderService();
    }
    
    componentDidMount(){
        
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       

        this.service.getCart(loggedUser.id)
            .then( response => {
                
                this.setState({
                    listOrder: response.data                    
                })
                console.log('response data ITENS PARA ENVIAR PRA PROX TELA', response.data)
            })            
            
    }

    removeItem = (item) =>{
        console.log('item', item)

        this.service.removeItemCart(item)
            .then( response => {
                console.log('resposta remover carrinho', response.data)
                successMessage('Removido com sucesso!')
                this.componentDidMount()
            })

    }

    nextStep = () => {

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');

        const clientId = loggedUser.id;

        this.orderService.sendToOrder(clientId)
            .then( response => {

                let orderId = response.data;
                console.log("ORDERR RETORNOOOOOO", orderId)
                successMessage("Selecione os endereços do pedido! ")
                this.props.history.push(`/pedido/${orderId}`)        

            })
    }

    render(){
        return(
            <>
            <CartListItems
                cartList={this.state.listOrder}
                removeCart={this.removeItem}                
            />  
              <div className="row cart">
                    <div className="col-lg-12 mb-4">
                        <div>
                            <h3 className="card h-100"><strong>Subtotal: num tem</strong></h3>
                        </div>
                    </div>

                    <div className="col-lg-12 mb-4">
                        <div className="card h-100"> 
                            <button                                           
                                className="btn btn-primary mb-1"                         
                                target="new"
                                onClick={this.nextStep}
                                >Próximo
                            </button>
                        </div>
                    </div>
                </div>                  
            
            </>
        )
    }
    
}

export default withRouter(Cart)