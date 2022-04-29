

import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useParams} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import OrderService from "../../../service/order/orderService";
import ExchangeListOrderItems from "./exchangeListOrderItems";


class ExchangeSelectItems extends React.Component{

    state = {
        
        order:'',
        itemList: [],

        orderId: 1,
        idList: [1,2],
        reason: 'Motivo porq eu quero',

        openModal: false,
    }

    
    constructor(){
        super();
        this.service = new OrderService();
    }

    componentDidMount(){  

        const id = this.props.match.params.id;

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

        this.service.sendExchange({orderId:this.state.orderId, idList: this.state.idList, reason: this.state.reason})
            .then( response => {
                console.log("RESPOSTA", response.data)
            })

    }

    selectItems = (itemId) =>{

        // this.setState({
        //     idList: itemId
        // })
    
        console.log("itemId", itemId)        
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

                        <button onClick={this.sendExchange}>Enviar pedido</button>

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