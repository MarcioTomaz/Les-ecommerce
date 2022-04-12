


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
import { errorMessage, successMessage } from "../../../components/toastr";

class OrderStepAddress extends React.Component{

    state = {
        addressListCobranca: [],
        addressListEntrega: [],

        addressCobranca: '',
        addressEntrega:'',
        // clientId: '',
        orderId:13

    //    creditCards: [],
    //    listOrders:[]
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

        const params = this.props.match.params;

        this.setState({
            orderId: params.id
        })

        console.log("IDDDDDDDDDDDDDDDD", this.orderId)

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
            
        // this.creditCardService.getAllCreditCards(userId)
        // .then( response => {
        //     console.log('credit cards', response.data)
        //     this.setState({
        //         creditCards: response.data
        //     })
        // })

        // this.cartService.getCart(userId)
        //     .then( response => {
        //         console.log('carrinho', response.data)

        //         this.setState({
        //             listOrders: response.data
        //         })

        //     })
    }    


    selectCard = (crediCardId) => {
        console.log('crediCardId', crediCardId)
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

    sendSelectedAddress = () => {

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');        

        const { addressCobranca, addressEntrega, orderId} = this.state;
        
        const params = this.props.match.params;

        const orderStepAddress = {addressCobranca, addressEntrega, orderId: params.id}

        console.log('AADRESS', orderStepAddress)

        if( addressCobranca === '' || addressEntrega === ''){
            errorMessage('Insira um endereço de entrega e cobrança. ')
        }else{

            this.service.saveOrderStepAddress(orderStepAddress)
                .then( response => {
                    console.log('RESPONSE', response.data)
                    successMessage('Endereços selecionados com sucesso!', response.data)

                    this.props.history.push('/pagamento');
                    
                } ).catch( error => {
                    console.log('aaaaaaaaa  ')
                } )
        }
    }

    cardToPay = (cardId) =>{
        console.log("CARTAO PRA PAGAa", cardId)
    }

    render(){
        return(
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                <div className="card-body">                        {/* <CardComponent />                    */}

                    <div className="container">

                        {/* <h4 className="card-body">Itens</h4>
                        <CartListItemsOrder 
                            cartList={this.state.listOrders}
                        />
                        <h4 className="card-body">Total a pagar: R$ diero</h4> */}


                    </div>

                        {/* <div className="container">
                            <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>

                            <h5 className="mt-4 mb-3 text-center">Cartões cadastrados</h5>                          
                            <CrediCardListTableOrder 
                                creditCards={this.state.creditCards} 
                                selectCard={this.selectCard}
                                cardToPay={this.cardToPay} />
                        </div> */}

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
                                <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a>
                                <h5 className="mt-4 mb-3 text-center">Lista - Endereços de Entrega </h5>
                                <AddressListTableOrder 
                                    addressList={this.state.addressListEntrega} 
                                    selectTypeAddress={this.selectTypeAddressEntrega}                                    
                                />
                            </div>


                        </div>
                    </div>

                    <div className="">
                        <button onClick={this.sendSelectedAddress} className=" float-right col-1 btn btn-success mt-3">Próximo</button>

                        <a href="#/carrinho" className="col-1 btn btn-secondary " >Voltar</a>
                    </div>
                </section>
            </>
        )
    }



}

export default withRouter(OrderStepAddress)