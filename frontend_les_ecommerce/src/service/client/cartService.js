


import ApiService from "../apiService";

class CartService extends ApiService{


    constructor(){
        super('/api/cart')
    }

    addToCart(product){

        console.log("PRODUCT SERVICE", product)
        return this.post('/adicionarCarrinho', product)
    }

    removeItemCart(item){

        console.log('item', item)
        return this.put('/removerItemCarrinho', item)
    }

    getCart(){

        return this.get('/')
    }

}

export default CartService;