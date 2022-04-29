
import React from "react";
import { withRouter } from "react-router-dom";
import LocalStorageService from "../../../service/localStorageService";
import OrderService from "../../../service/order/orderService";
import OrderClientListTable from "./OrderClientListTable";


class OrderClientList extends React.Component {

    state = {
        ordersList: []
    }

    constructor(){
        super();
        this.service = new OrderService();
    }

    componentDidMount(){
        console.log("did mount")
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       
        const userId = loggedUser.id;

        this.service.getAllOrders(userId)
            .then( response=> {
                const responseData = response.data;

                console.log(responseData)

                this.setState({
                    ordersList: responseData
                })
            })
    }

    details = (orderId) =>{

        this.service.getOrderDetails(orderId)
            .then( response => {

                console.log(response.data)

                this.props.history.push(`/detalhesPedido/${orderId}`)
            })
        
    }

    exchange = (orderId) => {
        console.log(orderId,"aaaaaaaaaaaaaaaaaaa")
        this.service.orderExchange(orderId)
            .then( response => {
                console.log(response.data)

                this.props.location.state = {order: response.data}

                console.log("PROPSSSSSP", this.props)

                this.props.history.push(`/trocaPedidos/${orderId}`)
            })
    }

    render(){
        return(
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Lista de pedidos</h1>
                    <hr />              

                    <div className="container">
                       <OrderClientListTable 
                            ordersList={this.state.ordersList}                            
                            exchange={this.exchange}
                            details={this.details}
                       />
                    </div>

                    <a href="#/administracao" className="btn btn-secondary " >Voltar</a>
                </section>

            </>
        )
    }
}

export default withRouter(OrderClientList)