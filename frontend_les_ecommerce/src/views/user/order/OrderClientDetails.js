

import React from "react";
import { withRouter } from "react-router-dom";
import OrderService from "../../../service/order/orderService";
import OrderListDetails from "./OrderListDetails";

class OrderClientDetails extends React.Component {


    state = {
        orderId: '',
        productName: '',
        status: '',
        coupon: '',
        total: '',
        creationDate:'',
        quantity:'',
        coupon:'',

        deliveryAddress:'',

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
                    creationDate:responseData.creationDate,
                    productsListOrder: responseData.itemList
                })

            })
    }

    render() {
        return (

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
                                            <OrderListDetails
                                                productsListOrder={this.state.productsListOrder}
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-10 float-left">
                                                <hr />
                                                <h4 className="mb-md-3"><strong>Dados do pedido: </strong></h4>
                                                <p className="card-text"><strong>Endereço de Entrega: </strong> 
                                                    {this.state.deliveryAddress.city},
                                                    {this.state.deliveryAddress.country}, 
                                                    {this.state.deliveryAddress.district}, 
                                                     {this.state.deliveryAddress.street},
                                                    {this.state.deliveryAddress.number}, 
                                                    {this.state.deliveryAddress.zipCode}

                                                </p>
                                                <p className="card-text"><strong>Data da compra: </strong> 
                                                    {this.state.creationDate[2]}/ 
                                                    {this.state.creationDate[1]}/ 
                                                    {this.state.creationDate[0]}  
                                                </p>
                                                <p className="card-text"><strong>Data estimada para entrega:</strong> Um dia </p>
                                                <p className={{
                                                    'EM_PROCESSAMENTO': 'text-info',
                                                    'EM_TRANSITO': 'text-warning',
                                                    'ENTREGUE': 'text-success',
                                                    'RECUSADO': 'text-danger',
                                                    'EM_TROCA': 'text-info',
                                                    'TROCA_AUTORIZADA': 'text-success'
                                                }[this.state.status]}>
                                                    <strong>Status:</strong> {this.state.status}</p>

                                                <div className=" mb-md-3 float-left">
                                                    <p className="card-text">
                                                        <strong>Código do cupom: </strong>
                                                            {this.state.coupon}
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
                                                {/* <div className="row">
                                <div className="col-lg-3 mb-md-3 float-left">
                                <p className="card-text">
                                    <strong>Código do cupom:</strong>
                                </p>
                                </div>
                                <div className="col-lg-4 mb-md-3 float-left">
                                <p className="card-text">
                                    <strong>Valor pago nesse cupom:</strong>
                                </p>
                                </div>
                            </div> */}
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-5 col-md-10">
                                            </div>
                                            {/* <div className="col-5">
                            <p className="btn-sm btn-dark text-center"></p>
                            </div> */}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8 col-md-10">
                                                <h3><strong>Valor da compra: R${this.state.total} </strong> </h3>
                                            </div>
                                            <div className="col-lg-2" >
                                                <button className="btn-sm btn-danger text-center"><strong>Solicitar devolucão</strong></button>
                                            </div>
                                            <div className="col-lg-2" >
                                                <button className="btn-sm btn-warning text-center"><strong>Solicitar troca</strong></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(OrderClientDetails);