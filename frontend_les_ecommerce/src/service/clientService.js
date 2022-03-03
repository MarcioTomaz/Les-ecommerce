

import ApiService from "./apiService";

class ClientService extends ApiService {

    constructor() {
        super('/api/clients');
    }

    authenticate(credentials){

        const item = this.post('/autenticar', credentials)
        console.log('CREDENCIAIS', credentials)

        return item;
    }

    save(client) {

        return this.post('/', client);
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
            { label:'Selecione..', value: '' },
            { label:'FIXO', value: 'FIXO' },
            { label:'MOVEL', value: 'MOVEL'}
        ]
    }

}

export default ClientService;