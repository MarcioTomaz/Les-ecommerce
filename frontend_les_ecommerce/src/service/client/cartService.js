


import ApiService from "../apiService";

class CartService extends ApiService{


    constructor(){
        super('/api/cart')
    }

    addToCart(product){

        console.log("addToCart", product)
        return this.post('/adicionarCarrinho', product)
    }

    removeItemCart(item){

        console.log('item1111111111111111', item)
        return this.put(`/removerItemCarrinho?id=${item}`)
    }

    getCart(id){

        return this.get(`/?id=${id}`)
    }


}

export default CartService;