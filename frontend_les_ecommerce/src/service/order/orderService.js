

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

    getOrderDetailsAdm(id){
        return this.get(`/detalhesPedidoAdm?id=${id}`)
    }

    orderExchange(id){
        return this.post(`/pedidoTroca?id=${id}`)
    }


    sendExchange(orderItems){

        return this.post('/emTroca', orderItems)
    }

    acceptExchange(id){
        
        return this.post(`/trocaAceita?id=${id}`)
    }

    refuseExchange(id){

        return this.post(`/recusarTroca?id=${id}`)
    }

    // ********************************************************

    getAllOrdersAdm(){
        return this.get('/pedidosAdm')
    }

    refuseOrder( orderId ){
        console.log("ORDER ID", orderId)
        return this.post(`/recusarPedido?id=${orderId}`)
    }

    acceptOrder( orderId ) {
        return this.post(`/aceitarPedido?id=${orderId}`)
    }

    confirmReceipt( orderId ){

        return this.post(`/confirmarRecebimento?id=${orderId}`)
    }

}

export default OrderService;