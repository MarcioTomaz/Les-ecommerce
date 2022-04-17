

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

}

export default OrderService;