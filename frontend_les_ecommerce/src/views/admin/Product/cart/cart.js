
import React from "react";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../../components/toastr";
import CartService from "../../../../service/client/cartService";
import CartListItems from "./cartListItems";
import LocalStorageService from "../../../../service/localStorageService";
import OrderService from "../../../../service/order/orderService";
import NewAddressService from "../../../../service/newAddress";
import CreditCardRegisterService from "../../../../service/creditCardRegisterService";
import CouponService from "../../../../service/Admin/couponService";

class Cart extends React.Component{
 
    
    state = {
        listOrder: [],
        cartSubTotal: '',

    }
    
    constructor(){
        super();
        this.service = new CartService();
        this.orderService = new OrderService();
        this.addressService = new NewAddressService()
        this.creditCardService = new CreditCardRegisterService();
        this.cartService = new CartService();
        this.couponService = new CouponService();
    }

    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }
    
    componentDidMount(){
        
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       
        const userId = loggedUser.id;

        let carrinhoTamanho;

        this.service.getCart(userId)
            .then( response => {
                
                let responseData = response.data;

                carrinhoTamanho = responseData.length;

                if( carrinhoTamanho > 0){
                    
                    document.getElementById('emptyCart').style.display = 'none';                    
                }else{

                    document.getElementById('emptyCart').style.display = '';                    
                }
                

                let subTotal = 0;

                console.log('carrinho tamanho', carrinhoTamanho)

                for(let i = 0; i < carrinhoTamanho; i++){
                    subTotal += ( responseData[i].quantity * responseData[i].product.price )                  
                }

                
                this.setState({
                    listOrder: response.data,
                    cartSubTotal: subTotal
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

    selectCard = (crediCardId) => {
        console.log('crediCardId', crediCardId)

        this.setState({
            paymentMethodList: crediCardId
        })
    }
    
    nextStep = () => {

        this.props.history.push(`/pagamento/`)        


      
    }

    render(){
        return(
            <>

            <div className="container">
                <CartListItems
                    cartList={this.state.listOrder}
                    removeCart={this.removeItem}
                />   

                <div className="container text-center" id="emptyCart" >

                    <h1>Carrinho vazio</h1>
                </div>                                  

                <div className="container" >
                    <h3 className="mt-5 h-100"><strong>Subtotal: R$ {this.state.cartSubTotal} </strong></h3>
                </div>                  
            </div>
              <div className="row cart">
                    <div className="col-lg-12 mb-4">
                       
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