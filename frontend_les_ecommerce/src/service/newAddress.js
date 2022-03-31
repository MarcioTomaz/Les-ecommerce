

import ApiService from "./apiService";

import { errorMessage } from "../components/toastr";

class NewAddressService extends ApiService {

    constructor(){
        super('/api/adresses');
    }

    save(address){

        return this.post('/', address);
    }

    deleteId(id){
        return this.delete(`/deletar?id=${id}`);
    }
    
    update(address){
        return this.put('/', address)
    }

    getAddressDetails(id){

        return this.get(`/listaEndereco?id=${id}`);
    }   

        getAddresType(){
            return [
                { label: 'Selecione...', value:'' },
                { label:'COBRANCA', value:'COBRANCA' },
                { label:'ENTREGA', value:'ENTREGA' }
            ]
        }
    }

  

export default NewAddressService;