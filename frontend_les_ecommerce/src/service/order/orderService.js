

import ApiService from "../apiService";

class OrderService extends ApiService{

    constructor(){
        super('/api/order')
    }

    saveOrder(order){

        this.post('/', order)
    }

}

export default OrderService;