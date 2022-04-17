
import React from "react";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../../components/toastr";
import CartService from "../../../../service/client/cartService";
import CartListItems from "./cartListItems";
import LocalStorageService from "../../../../service/localStorageService";
import OrderService from "../../../../service/order/orderService";
import NewAddressService from "../../../../service/newAddress";
import CreditCardRegisterService from "../../../../service/creditCardRegisterService";
import AddressListTableOrder from "../../../address/addressListTableOrder";
import CrediCardListTableOrder from "../../../creditCard/crediCardListTableOrder";
import CouponService from "../../../../service/Admin/couponService";

class Cart extends React.Component{
 
    
    state = {
        listOrder: [],
        cartSubTotal: '',

        addressListCobranca: [],
        addressListEntrega:[],

        addressCobranca: '',
        addressEntrega:'',
        paymentMethodList: [],

        code: '',

        creditCards: [],

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

        this.service.getCart(loggedUser.id)
            .then( response => {
                
                let responseData = response.data;

                carrinhoTamanho = responseData.length;

                let subTotal = 0;

                console.log('carrinho tamanho', carrinhoTamanho)

                for(let i = 0; i < carrinhoTamanho; i++){
                    subTotal += ( responseData[i].quantity * responseData[i].product.price )

                    console.log('subTotal', subTotal);
                    // console.log(responseData[i].quantity);
                    // console.log( responseData[i].product.price );
                }

                console.log(subTotal,'subtotal')
                // console.log(responseData[0].quantity * responseData[0].product.price);
                
                this.setState({
                    listOrder: response.data,
                    cartSubTotal: subTotal
                })         

            })            
            
            this.addressService.getAllAddressCobranca(userId)
            .then( response => {
                this.setState({
                    addressListCobranca: response.data
                })
            })

            this.addressService.getAllAddressEntrega(userId)
            .then( response => {
                this.setState({
                    addressListEntrega: response.data,                
                })
            })
                
            this.creditCardService.getAllCreditCards(userId)
            .then( response => {
                
                this.setState({
                    creditCards: response.data
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

    cardToPay = (cardId) =>{

        console.log("CARTAO PRA PAGAa", cardId)
        let teste = document.getElementById(`${cardId}`);

        

        teste.setAttribute('type', 'hidden');
        console.log("CARTAO PRA PAGAa", cardId);
        
        teste.setAttribute('type', 'number');

        console.log("OBJTO", this.state)
    }


    selectTypeAddressCobranca = (addressId) =>{
        console.log('addresId COBRANCA', addressId)

        this.setState({
            addressCobranca: addressId,
            orderId: '',
        })
    }

    selectTypeAddressEntrega = (addressId) =>{
        console.log('addresId Entrega', addressId)

        this.setState({
            addressEntrega: addressId
        })
    }

    verifyCoupon = () => {

        const { code } = this.state

        let verifyCoupon = { code }

        this.couponService.verifyCoupon( verifyCoupon )
            .then( response => {

                console.log("VERIFY COUPON", response)
                successMessage("Cupom válido!");                

            }).catch( error => {
                errorMessage("Cupom invalido")
            })
    }

    nextStep = () => {

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');

        const clientId = loggedUser.id;

        const { listOrder, cartSubTotal, addressCobranca, addressEntrega, paymentMethodList, code } = this.state;

        const order = { listOrder, cartSubTotal, addressCobranca, addressEntrega, paymentMethodList, clientId, cartSubTotal, code }


        this.orderService.sendToOrder(order)
            .then( response => {

                successMessage('Pedido feito com sucesso!')

                // let orderId = response.data;
                // console.log("ORDERR RETORNOOOOOO", orderId)
                // successMessage("Selecione os endereços do pedido! ")
                // this.props.history.push(`/pedido/${orderId}`)        

            })
    }

    render(){
        return(
            <>

            <div className="container">
                <CartListItems
                    cartList={this.state.listOrder}
                    removeCart={this.removeItem}
                />                                     

                <div className="container">

                <div className="container">
                    <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a>
                    <h5 className="mt-4 mb-3 text-center">Lista - Endereços de Cobrança </h5>

                    <AddressListTableOrder 
                        addressList={this.state.addressListCobranca} 
                        selectTypeAddress={this.selectTypeAddressCobranca}                                    
                    />
                {/* 
                    <AddressListTableOrder 
                        addressList={this.state.addressList} 
                        selectBillingAddress={this.selectBillingAddress}
                        selectDeliveryAddress={this.selectDeliveryAddress}
                    /> */}
                </div>

                <div className="container">
                    {/* <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a> */}
                    <h5 className="mt-4 mb-3 text-center">Lista - Endereços de Entrega </h5>
                    <AddressListTableOrder 
                        addressList={this.state.addressListEntrega} 
                        selectTypeAddress={this.selectTypeAddressEntrega}                                    
                    />
                </div>
                </div>  

                <div className="container">

                    <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>
                    <h5 className="mt-4 mb-3 text-center">Cartões cadastrados</h5>  

                    <CrediCardListTableOrder 
                        creditCards={this.state.creditCards} 
                        selectCard={this.selectCard}
                        cardToPay={this.cardToPay} 
                    />
                </div>

                <div className="container row">
                    <div className="col-6">
                            <input 
                                className="card-text mt-4 mb-3 form-control"
                                id="code"
                                name="code"
                                value={this.state.code}
                                onChange={this.handleChange}
                                ></input>
                        </div>
                        <div className="col-4">
                            <button 
                                className="btn btn-lg btn-success btn-block mt-4 mb-3"
                                onClick={this.verifyCoupon}>Verificar cupom</button>
                        </div>
                    
                </div>

                <div className="container">
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