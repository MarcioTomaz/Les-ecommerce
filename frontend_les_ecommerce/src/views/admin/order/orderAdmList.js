

import React from "react";
import { withRouter } from "react-router-dom";
import OrderService from "../../../service/order/orderService";
import OrderAdmListTable from "./orderAdmListTable";


class OrderAdmList extends React.Component{

    state = {
        ordersList: []
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
            })
    }

    refuse = ( orderId ) => {
        this.service.refuseOrder( orderId )
            .then( response => {
                console.log(response.data)
                this.getAllOrdersAdmin();      
            })
    }


    render(){
        return(
            <>
                
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Lista de pedidos</h1>
                    <hr />              

                    <div className="container">
                       <OrderAdmListTable 
                            ordersList={this.state.ordersList}
                            accept={this.accept}
                            refuse={this.refuse}
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