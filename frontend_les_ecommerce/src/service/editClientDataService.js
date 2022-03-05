

import ApiService from "./apiService";

class EditClientDataService extends ApiService{

    constructor(){
        super('/api/clients');
    }
    
    update(client){
        return this.put('/', client)
    }

}

export default EditClientDataService;