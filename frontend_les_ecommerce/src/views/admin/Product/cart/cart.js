
import React from "react";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../../components/toastr";
import CartService from "../../../../service/client/cartService";
import CartListItems from "./cartListItems";

class Cart extends React.Component{
 
    
    state = {
        listOrder: []
    }
    
    constructor(){
        super();
        this.service = new CartService();
    }
    
    componentDidMount(){
        
        this.service.getCart()
            .then( response => {
                
                this.setState({
                    listOrder: response.data
                })
            })
    }

    render(){
        return(
            <>
            <CartListItems
                cartList={this.state.listOrder}
                
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