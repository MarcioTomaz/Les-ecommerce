

import ApiService from "../apiService";

class OrderService extends ApiService{

    constructor(){
        super('/api/order')
    }

    saveOrderStepAddress(orderStepAddress){

       return  this.post('/enderecos', orderStepAddress)
    }

    sendToOrder(order){
        
        return this.post('/pedido', order)
    }

    getAllOrders(clientId){

        return this.get(`/pedidos?id=${clientId}`)
    }

    getOrderDetails(id){
        return this.get(`/detalhesPedido?id=${id}`)
    }

    orderExchange(id){
        return this.post(`/pedidoTroca?id=${id}`)
    }


    sendExchange(orderItems){

        return this.post('/emTroca', orderItems)
    }

    // ********************************************************

    getAllOrdersAdm(){
        return this.get('/pedidosAdm')
    }

    refuseOrder( orderId ){
        return this.post(`/recusarPedido?id=${orderId}`)
    }

    acceptOrder( orderId ) {
        return this.post(`/aceitarPedido?id=${orderId}`)
    }

}

export default OrderService;