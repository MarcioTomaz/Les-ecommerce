

import ApiService from "../apiService";

class DashboardService extends ApiService{

    constructor(){
        super('/api/adm')
    }

    getDashboard(filter){

        return this.post('/dashboard', filter)
    }

    getDashboardFilterDate(filterDate){
        return this.post('/dashboardFilter', filterDate)
    }

}

export default DashboardService;