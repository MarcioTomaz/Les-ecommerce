/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import ProductService from "../../../service/Admin/productService";

import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../components/toastr";
import ProductListToClient from "./productListToClient";
import CartService from "../../../service/client/cartService";
import LocalStorageService from "../../../service/localStorageService";
import { Card } from "react-bootstrap";
import { Button } from "bootstrap";


class ProductListClient extends React.Component{

    state = {
        name: '',
        cardRarity: '',
        cardType: '',
        productDescription: '',     
        stock: '',       
        price: '',
        productList: [],
        quantity: 1,//teste mudar dpssssssssss
        clientId: '',
        productId:'',
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

    // addCart = (product) => {
    //     console.log('product',product)
    //     this.cartService.addToCart({product: product,quantity:1})
    //         .then(response => {
    //             console.log('resposta do carinho', response.data)
    //             successMessage("Produto adicionado no carrinho!")
    //         })
    // }

    addCart = (product) => {

        console.log('product', product);

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       

        const {clientId, productId, quantity } = this.state;

        console.log("ID DO PRODUTO", productId)

        const cart = { clientId: loggedUser.id, productId: product.id, quantity}
        console.log('cart ',cart)
        console.log("PRODUTCT", product.quantity)

        if(product.stock < 1){
            errorMessage("Estoque invalido!")
        }else{
            this.cartService.addToCart(cart)
                .then(response => {
                    console.log('resposta do carinho', response.data)
                    successMessage("Produto adicionado no carrinho!")
                })
        }
    }

    getProductDetails = (productId) => {
        console.log('productId', productId)
        this.service.getProductDetails(productId)
            .then( response => {
                console.log('detalhes produto', response.data)
                
                this.props.history.push(`/detalhesProduto/${productId}`)
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
                                getProductDetails={this.getProductDetails}
                            />
                        </div>
                    </div>
                </div>
              
            </>
        )
    }


}

export default withRouter(ProductListClient);