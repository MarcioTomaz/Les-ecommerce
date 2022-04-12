

import ApiService from "../apiService";

class OrderService extends ApiService{

    constructor(){
        super('/api/order')
    }

    saveOrderStepAddress(orderStepAddress){

       return  this.post('/enderecos', orderStepAddress)
    }

    sendToOrder(id){
        return this.post(`/carrinhoItens/?id=${id}`)
    }

}

export default OrderService;