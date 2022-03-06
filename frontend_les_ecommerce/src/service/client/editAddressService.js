

import ApiService from "../apiService";

class EditAddressService extends ApiService{

    constructor(){
        super('/api/adresses')
    }

    update(address){
        return this.put('/', address)
    }

}

export default EditAddressService;