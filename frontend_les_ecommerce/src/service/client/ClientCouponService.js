

import ApiService from "../apiService";

class ClientCouponService extends ApiService{


    constructor(){
        super('/api/coupons')
    }


    listCoupons(id){
        return this.get(`/cuponsTroca?id=${id}`)
    }
}

export default ClientCouponService;