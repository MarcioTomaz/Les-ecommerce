

import React from "react";
import { withRouter } from "react-router-dom";
import { successMessage } from "../../../components/toastr";
import OrderService from "../../../service/order/orderService";
import OrderListDetailsAdm from "./OrderListDetailsAdm";


class OrderClientDetailsAdm extends React.Component{

    state = {

        orderId: '',
        productName: '',
        status: '',
        coupon: '',
        total: '',
        creationDate:'',
        quantity:'',
        coupon:'',

        client:'',

        reason:'',

        deliveryAddress:'',

        billingAddress:'',

        productsListOrder: []
    }

    constructor() {
        super();
        this.service = new OrderService();        
    }

    componentDidMount() {
        const params = this.props.match.params;

        this.service.getOrderDetails(params.id)
            .then(response => {

                let responseData = response.data

                console.log('responseData', responseData)

               this.setState({
                    orderId: responseData.id,
                    status: responseData.status,

                    quantity: responseData.quantity,
                    total: responseData.total,

                    deliveryAddress: responseData.deliveryAddress,
                    billingAddress: responseData.billingAddress,

                    creationDate:responseData.creationDate,

                    productsListOrder: responseData.itemList,
                    coupon: responseData.coupon,
                    reason: responseData.reason,

                    client: responseData.client,
                })

                console.log('aaa',this.state.client)

            })
    }

    acceptOrder = () => {

        const params = this.props.match.params;

        const orderId = params.id;

        this.service.acceptOrder(orderId)
            .then( response => {
                successMessage("Pedido aceito com sucesso!")
            })
        
        this.props.history.push('/listaAdmPedidos')
    }

    refuse = () => {

        const params = this.props.match.params;

        const orderId = params.id;

        this.service.refuseOrder( orderId )
        .then( response => {
            console.log(response.data)
            this.getAllOrdersAdmin();      
        })

        this.props.history.push('/listaAdmPedidos')
    }

    confirmReceipt = () => {

        const params = this.props.match.params;

        const orderId = params.id;

        this.service.confirmReceipt( orderId )
            .then( response => {

                successMessage("Confirmado o recebimento!")
            })

        this.props.history.push('/listaAdmPedidos')

    }


    acceptExchange = () => {

        console.log("bora troca ")

        const params = this.props.match.params;

        const orderId = params.id;

        this.service.acceptExchange(orderId)
            .then( response => {    

                successMessage("Troca aceita com sucesso!")

                this.props.history.push('/listaAdmPedidos')

                console.log(orderId)
            } )

    }

    refuseExchange = () => {

        console.log("nao vamo troca ")

        const params = this.props.match.params;

        const orderId = params.id;

        this.service.refuseExchange(orderId)
            .then( response => {    

                successMessage("Troca recusada ")

                console.log(orderId)
                this.props.history.push('/listaAdmPedidos')

            } )
    }

    render(){
        return(
            <>
                <div className="container mt-5 mb-5">

                {/* <h1 className="mt-4 mb-3">Pedidos</h1>             */}

                <div className="row" >
                    <div className="col-lg-12 col-md-8 mx-auto">
                        {/* <hr /> */}
                        <div className="card rounded shadow shadow-sm">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12 col-md-5 float-left">
                                        <h3><strong>ID do pedido: {this.state.orderId} </strong></h3>
                                        {/* <hr/> */}
                                    </div>
                                </div>
                                <div className="" >
                                    <div className="">
                                        {/* <a [routerLinkActive]="['/product-detail']">
                        <img className="img-fluid rounded mb-3 mb-md-3" [src]="item?.carta?.imagemPath" [alt]="item?.carta?.nome"> */}
                                        {/* </a> */}
                                    </div>

                                    {/* Colocar o componente que lista os produtos aqui */}

                                    <div>
                                        <OrderListDetailsAdm
                                            productsListOrder={this.state.productsListOrder}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-10 float-left">
                                            <hr />
                                            <h4 className="mb-md-3"><strong>Dados do pedido: </strong></h4>

                                            <p className="card-text"><strong>Nome do cliente: </strong>{this.state.client.name}</p>
                                            
                                            <p className="card-text"><strong>E-mail do cliente: </strong>{this.state.client.email}</p>


                                            <p className="card-text"><strong>Endereço de Entrega: </strong> 
                                                {this.state.deliveryAddress.city},
                                                {this.state.deliveryAddress.country}, 
                                                {this.state.deliveryAddress.district}, 
                                                {this.state.deliveryAddress.street},
                                                {this.state.deliveryAddress.number}, 
                                                {this.state.deliveryAddress.zipCode}

                                            </p>

                                            <p className="card-text"><strong>Endereço de Cobrança: </strong> 
                                                {this.state.billingAddress.city},
                                                {this.state.billingAddress.country}, 
                                                {this.state.billingAddress.district}, 
                                                {this.state.billingAddress.street},
                                                {this.state.billingAddress.number}, 
                                                {this.state.billingAddress.zipCode}

                                            </p>


                                            <p className="card-text"><strong>Data da compra: </strong> 
                                                {this.state.creationDate[2]}/ 
                                                {this.state.creationDate[1]}/ 
                                                {this.state.creationDate[0]}  
                                            </p>
                                            <p className="card-text"><strong>Data estimada para entrega:</strong> Um dia </p>                                            
                                            
                                            {{
                                                'EM_TROCA': <p><strong>Motivo do pedido de troca:</strong> {this.state.reason != null ? this.state.reason : ''}</p>
                                            }[this.state.status]}

                                            <p className={{
                                                'EM_PROCESSAMENTO': 'text-secondary',
                                                'EM_TRANSITO': 'text-info',
                                                'ENTREGUE': 'text-success',
                                                'RECUSADO': 'text-danger',
                                                'EM_TROCA': 'text-warning',
                                                'TROCA_AUTORIZADA': 'text-primary',
                                                'TROCA_RECUSADA': 'text-danger',
                                                'PEDIDO_RECEBIDO': 'text-success'
                                            }[this.state.status]}>
                                                <strong>Status:</strong> {this.state.status}</p>

                                            <div className=" mb-md-3 float-left">
                                                <p className="card-text">
                                                    <strong>Código do cupom: </strong>
                                                    {/* this.state.quantity > 0 ? this.state.price * this.state.quantity : this.state.price */}

                                                        {this.state.coupon != null ? this.state.coupon.code : 'Nenhum cupom utilizado'}
                                                </p>

                                                <p className="card-text">
                                                    <strong>Valor do desconto: R$ </strong>
                                                        {/* {this.state.coupon.value} */}
                                                        {this.state.coupon != null ? this.state.coupon.value : 'Nenhum cupom utilizado'}

                                                </p>
                                            </div>

                                            <div />


                                            {/* <div className="row" >
                                                <div className="col-lg-3 mb-md-3 float-left">
                                                    <p className="card-text">
                                                    <strong>Cartão com final:</strong>
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 mb-md-3 float-left">
                                                    <p className="card-text">
                                                    <strong>Valor pago nesse cartão:</strong> </p>
                                                </div>
                                                </div>                             */}
                        
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-5 col-md-10">
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-10">
                                            <h3><strong>Valor da compra: R${this.state.total} </strong> </h3>
                                        </div>   

                                        <div className="col-lg-1" >
                                            
                                        </div>                                                                         
                                     
                                        <div className="col-lg-1">{{
                                                'EM_PROCESSAMENTO':
                                                    <div className="col-lg-1">

                                                        <div className="col-lg-1">
                                                            <button 
                                                                className="btn-sm btn-primary text-center"
                                                                onClick={this.acceptOrder}
                                                            ><strong>Aceitar pedido</strong></button>
                                                        </div>

                                                    <div className="col-lg-1" >
                                                        <button 
                                                            className="btn-sm btn-danger text-center "
                                                            onClick={this.refuse}
                                                            ><strong>Recusar pedido</strong></button>
                                                    </div>
                                                    </div>,
                                            }[this.state.status]}
                                        </div>                                       


                                        {/* <p className={{
                                                'EM_PROCESSAMENTO': 'text-secondary',
                                                'EM_TRANSITO': 'text-info',
                                                'ENTREGUE': 'text-success',
                                                'RECUSADO': 'text-danger',
                                                'EM_TROCA': 'text-warning',
                                                'TROCA_AUTORIZADA': 'text-success',
                                                'TROCA_RECUSADA': 'text-danger',
                                                'PEDIDO_RECEBIDO': 'text-success'
                                            }[this.state.status]}>
                                        /</p>                                        */}


                                        <div className="col-lg-1">{{
                                                'EM_TROCA':
                                                    <div className="col-lg-1">

                                                         <div className="col-lg-1" >
                                                            <button 
                                                                className="btn-sm btn-warning text-center"
                                                                onClick={this.acceptExchange}
                                                                ><strong>Aceitar troca</strong></button>
                                                        </div>

                                                        <div className="col-lg-2 " >
                                                            <button 
                                                                className="btn-sm btn-danger text-center"
                                                                onClick={this.refuse}
                                                                ><strong>Recusar pedido de troca</strong></button>
                                                        </div>
                                                    </div>,
                                            }[this.state.status]}
                                        </div>  

                                           <div className="col-lg-1">{{
                                                'RECUSADO':
                                                    <div className="col-lg-1">
                                                    
                                                    </div>,
                                            }[this.state.status]}
                                        </div>   


                                           <div className="col-lg-1">{{
                                                'EM_TRANSITO':
                                                <div className="col-lg-1" >
                                                    <button 
                                                        className="btn-sm btn-success text-center"
                                                        onClick={this.confirmReceipt}
                                                        ><strong>Confirmar Recebimento</strong></button>
                                                </div>,
                                            }[this.state.status]}
                                        </div>  

                                        <div className="col-lg-1">{{
                                                'TROCA_AUTORIZADA':
                                                <div className="col-lg-1" >
                                                    <button 
                                                        className="btn-sm btn-success text-center"
                                                        onClick={this.confirmReceipt}
                                                        ><strong>Confirmar Recebimento</strong></button>
                                                </div>,
                                            }[this.state.status]}
                                        </div>                                        
                                      
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <a href="#/listaAdmPedidos" className=" col-lg-12 col-md-8  btn btn-secondary mb-2 mt-5" style={{maxWidth: '140px'}}>Voltar</a>

                    <hr />
                </div>
                </div>  
            </>
        )
    }
}

export default withRouter(OrderClientDetailsAdm)