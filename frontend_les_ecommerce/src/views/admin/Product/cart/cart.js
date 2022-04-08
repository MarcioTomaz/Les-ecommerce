
import React from "react";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../../components/toastr";
import CartService from "../../../../service/client/cartService";
import CartListItems from "./cartListItems";
import LocalStorageService from "../../../../service/localStorageService";

class Cart extends React.Component{
 
    
    state = {
        listOrder: []
    }
    
    constructor(){
        super();
        this.service = new CartService();
    }
    
    componentDidMount(){
        
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       

        this.service.getCart(loggedUser.id)
            .then( response => {
                
                this.setState({
                    listOrder: response.data
                })
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

    render(){
        return(
            <>
            <CartListItems
                cartList={this.state.listOrder}
                removeCart={this.removeItem}                
            />  
              <div className="row cart">
                    <div className="col-lg-12">
                        <h3 className="card-text float-right"><strong>Subtotal: num tem</strong></h3>
                    </div>
                </div>                  
            
            </>
        )
    }
    
}

export default withRouter(Cart)