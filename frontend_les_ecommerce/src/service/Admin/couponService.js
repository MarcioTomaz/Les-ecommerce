

import ApiService from "../apiService";

class CouponService extends ApiService{

    constructor(){
        super('/api/coupons')
    }

    saveCoupon(coupon){

        return this.post('/', coupon);
    }

    deleteId(id){

        return this.delete(`/deletar?id=${id}`)
    }

    getAllCoupons(){
        console.log("TO NO GET ALL COUPONS")

        return this.get('/cupons');
    }
}

export default CouponService;