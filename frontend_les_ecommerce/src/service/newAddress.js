

import ApiService from "./apiService";

import { errorMessage } from "../components/toastr";

class NewAddressService extends ApiService {

    constructor(){
        super('/api/adresses');
    }

    save(address){

        console.log("ADDRES DO SAVE", address)

        return this.post('/', address);
    }

    deleteId(id){
        return this.delete(`/deletar?id=${id}`);
    }
    
    update(address){
        console.log("ADDRES DO EDIT", address)
        return this.put('/', address)
    }

    getAllAddress(id){
        return this.get(`/listaEndereco?id=${id}`);
    }

    getAddressDetails(id){
        console.log("getaddres", id)
        return this.get(`/detalhesEndereco?id=${id}`);
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