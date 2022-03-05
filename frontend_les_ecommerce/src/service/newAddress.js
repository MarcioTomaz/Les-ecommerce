

import ApiService from "./apiService";

class NewAddressService extends ApiService {

    constructor(){
        super('/api/adresses');
    }

    save(address){

        return this.post('/', address);

    }

}

export default NewAddressService;