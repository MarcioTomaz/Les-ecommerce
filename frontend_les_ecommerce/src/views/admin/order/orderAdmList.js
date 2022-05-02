

import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import OrderService from "../../../service/order/orderService";
import OrderAdmListTable from "./orderAdmListTable";


class OrderAdmList extends React.Component{

    state = {
        ordersList: [],

        openModal: false,
    }

    constructor(){
        super();
        this.service = new OrderService();
    }

    componentDidMount(){
        this.getAllOrdersAdmin();      
    }


    getAllOrdersAdmin(){
        this.service.getAllOrdersAdm()
        .then( response => {

            this.setState({
                ordersList: response.data
            })            
        })
    }

    accept = ( orderId ) => {

        this.service.acceptOrder( orderId )
            .then( response=> {

                this.getAllOrdersAdmin();
                this.props.history.push('/listaAdmPedidos')

            })

    }

    refuse = ( orderId ) => {
        this.service.refuseOrder( orderId )
            .then( response => {
                console.log(response.data)
                this.getAllOrdersAdmin();      
            })

            this.props.history.push('/listaAdmPedidos')
    }

    confirmReceipt = (orderId) => {
        
        this.service.confirmReceipt( orderId )
            .then( response => {
                
            })

            this.props.history.push('/listaAdmPedidos')

    }


        closeModal = () => {

            this.setState({
                openModal: false,
            })
        }

        openModal = () => {

            this.setState({
                openModal: true,
            })
        }

        details = (orderId) =>{

           console.log("SOCORRR", orderId)

           this.service.getOrderDetailsAdm(orderId)
            .then( response => {

                console.log(response.data)

                this.props.history.push(`/detalhesPedidoAdm/${orderId}`)
            })
            
        }      


    render(){
        return(
            <>   

               {/* <Button variant="primary" onClick={this.openModal}>
                        Launch demo modal
                </Button> */}

                <Modal show={this.state.openModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Deseja recusar o pedido?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Label>Insira o motivo</Form.Label>
                    <Form.Control type="textArea" placeholder="Motivo" />

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={this.closeModal}>
                        Recusar Pedido
                    </Button>
                    </Modal.Footer>
                </Modal> 


            
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Lista de pedidos</h1>
                    <hr />              

                    <div className="container">
                       <OrderAdmListTable 
                            ordersList={this.state.ordersList}
                            accept={this.accept}
                            refuse={this.refuse}
                            confirmReceipt={this.confirmReceipt}
                            details={this.details}
                       />
                    </div>

                    <a href="#/administracao" className="btn btn-secondary " >Voltar</a>
                </section>

            </>
        )    
    }

}



export default withRouter(OrderAdmList)