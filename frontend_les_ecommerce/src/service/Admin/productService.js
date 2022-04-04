

import ApiService from "../apiService";

class ProductService extends ApiService{


    constructor(){
        super('/api/products')
    }

    save(product){
        console.log(product)
        return this.post('/', product)
    }

    update(product){
        return this.put('/editar', product);
    }

    deleteId(id){

        return this.delete(`/deletar?id=${id}`);
    }

    changeActive(id){

        return this.put(`/inativar?id=${id}`);
    }

    getAllProducts(){

        return this.get('/produtos');
    }

    getProductDetails(id){

        return this.get(`/detalhesProduto?id=${id}`);
    }

    getRarity(){
        return [
            {label: 'Selecione...', value: ''},
            {label: 'COMUNS', value: 'COMUNS'},
            {label: 'RARAS', value: 'RARAS'},
            {label: 'SUPER RARA', value: 'SUPER_RARA'},
            {label: 'ULTRA RARA', value: 'ULTRA_RARA'},
            {label: 'SECRETA RARA', value: 'SECRETA_RARA'},
            {label: 'ULTIMATE RARA', value: 'ULTIMATE_RARA'},
            {label: 'RARAS FANTASMAS', value: 'RARAS_FANTASMAS'},    
        ]
    }

    getType(){
        return [

            {label: 'Selecione...', value: ''},
            {label: 'MONSTRO', value: 'MONSTRO'},
            {label: 'ARMADILHA', value: 'ARMADILHA'},
            {label: 'MAGICA', value: 'MAGICA'}, 
        ]
    }

}

export default ProductService;