

import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useParams} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { errorMessage, successMessage } from '../../../components/toastr';
import OrderService from "../../../service/order/orderService";
import ExchangeListOrderItems from "./exchangeListOrderItems";


class ExchangeSelectItems extends React.Component{

    state = {
        
        order:'',
        itemList: [],

        orderId: '',
        idList: [],
        reason: '',

        openModal: false,
    }

    
    constructor(){
        super();
        this.service = new OrderService();
    }

    componentDidMount(){  

        const id = this.props.match.params.id;

        console.log("GETORDERDETAILS ID ", id)

        this.setState({
            orderId: id
        })

        this.service.getOrderDetails(id)
            .then( response => {
                
                this.setState({
                    order: response.data,
                    itemList: response.data.itemList
                })

                console.log("order", this.state.order)
                console.log("itemList", this.state.itemList)
            })
    }

    sendExchange = () => {

        console.log(this.state.reason)

        let orderId = this.state.orderId;

        if(this.state.idList == '' ){

            errorMessage("Selecione pelo menos 1 produto para troca")
            
        }else{
            this.service.sendExchange({orderId:this.state.orderId, idList: this.state.idList, reason: this.state.reason})
            .then( response => {
                successMessage("Pedido de troca enviado com sucesso!")
                console.log("RESPOSTA", response.data)

                this.props.history.push('/listaPedidos')
            })
        }   

    }
    
    selectItems = (itemId) =>{   
        
        console.log(itemId)
        console.log("itemId", this.state.idList)

        this.setState({
            idList: [...this.state.idList, itemId]
            // idList: this.state.idList.concat(itemId)
        })
    
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

    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <>

                {/* <Button variant="primary" onClick={this.openModal}>
                        Launch demo modal
                </Button>

                <Modal show={this.state.openModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.closeModal}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal> */}

                    
                <div className="container mt-5 mb-5 card rounded shadow shadow-sm">
                    <h1>Selecione os itens para troca</h1>

                    <div className="card-body">
                        <ExchangeListOrderItems 
                            exchangeListOrder={this.state.itemList}
                            selectItems={this.selectItems}
                        />                        

                        <label className='mt-3 mb-3'><strong>Motivo da troca: </strong></label>
                        
                        <textarea 
                            className='form-control mb-3' 
                            value={this.state.reason}
                            name="reason"
                            onChange={this.handleChange}
                            ></textarea> 

                        <button onClick={this.sendExchange} className="btn btn-primary">Enviar pedido</button>

                        {/* <div >
                            <ul>
                                {this.state.itemList.map( items => 
                                    <input key={items.id} type="checkbox" data-itemid={items.id} onClick={this.handleClick}></input> )}
                            </ul>
                        </div>
                        <input type="checkbox" onClick={this.teste}/> */}

                    </div>
                </div>
            </>
        )
    }

}

export default withRouter(ExchangeSelectItems)