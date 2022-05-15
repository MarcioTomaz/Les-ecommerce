

import ApiService from "../apiService";

class DashboardService extends ApiService{

    constructor(){
        super('/api/adm')
    }

    getOrders(filter){

        return this.post('/dashboard', filter)
    }

}