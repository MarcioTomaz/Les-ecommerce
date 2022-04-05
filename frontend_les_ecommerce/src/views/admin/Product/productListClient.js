/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import ProductService from "../../../service/Admin/productService";

import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../components/toastr";
import ProductListToClient from "./productListToClient";
import CartService from "../../../service/client/cartService";


class ProductListClient extends React.Component{

    state = {
        name: '',
        cardRarity: '',
        cardType: '',
        productDescription: '',     
        stock: '',       
        price: '',
        productList: []
    }

    constructor(){
        super();
        this.service = new ProductService();
        this.cartService = new CartService();
    }

    componentDidMount(){

        console.log(this.service)
        this.service.getAllProducts()
            .then( response => {
                const responseData = response.data;

                this.setState({
                    productList: response.data
                })

                console.log(this.state.productList);
            })
    }

    addCart = (product) => {
        console.log('product',product)
        this.cartService.addToCart({product: product,quantity:1})
            .then(response => {
                console.log('resposta do carinho', response.data)
                successMessage("Produto adicionado no carrinho!")
            })
    }

    render(){
        return(
            <>
                <div className="album py-5 bg-light mx-5 my-5">
                    <div className="container">
                        <div className="row">
                            <ProductListToClient
                                productList={this.state.productList}
                                addToCart={this.addCart}
                            />
                        </div>
                    </div>
                </div>
              
            </>
        )
    }


}

export default withRouter(ProductListClient);