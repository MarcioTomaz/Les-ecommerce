

import ApiService from "./apiService";

class NewAddressService extends ApiService {

    constructor(){
        super('/api/adresses');
    }

    save(address){

        return this.post('/', address);

    }

    getAddresType(){
        return [
            { label: 'Selecione...', value:'' },
            { label:'COBRANCA', value:'COBRANCA' },
            { label:'ENTREGA', value:'ENTREGA' },
        ]
    }

}

export default NewAddressService;