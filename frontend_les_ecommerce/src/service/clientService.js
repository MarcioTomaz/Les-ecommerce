
import ApiService from "./apiService";
import ValidateError from "./client/errovalidacao";
class ClientService extends ApiService {

    constructor() {
        super('/api/clients');
    }

    authenticate(credentials){

        const item = this.post('/autenticar', credentials)

        return item;
    }

    save(client) {      

        return this.post('/', client);
    }

    deleteClient(id) {      

        return this.post(`/deletar?id=${id}`);

    }

    getClientDetails(id){
        
        return this.get(`/detalhesUsuario?id=${id}`);
        //return this.get(`/consultarCliente?id=${id}`);
        //return this.post(`/consultarCliente`, client)
    }

    getGender() {
        return [
            { label: 'Selecione...', value: '' },
            { label:'MASCULINO', value: 'MASCULINO' },
            { label: 'FEMININO', value: 'FEMININO' },
            { label: 'OUTRO', value: 'OUTRO' }
        ]
    }

    getType() {
        return [
            { label:'Selecione...', value: '' },
            { label:'FIXO', value: 'FIXO' },
            { label:'MOVEL', value: 'MOVEL'}
        ]
    }

    

}

export default ClientService;