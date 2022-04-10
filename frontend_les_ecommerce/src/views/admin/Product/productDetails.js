

import React from "react";
import ProductService from "../../../service/Admin/productService";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { errorMessage, successMessage } from "../../../components/toastr";
import CartService from "../../../service/client/cartService";
import LocalStorageService from "../../../service/localStorageService";

class ProductDetails extends React.Component{

    state = {
        name: '',
        cardRarity: '',
        cardType: '',
        productDescription: '',     
        stock: 0,       
        price: '',
        quantity: '',
        clientId: '',
        productId:'',
    }

    constructor(){
        super();
        this.service = new ProductService();
        this.cartService = new CartService();
    }

    componentDidMount(){

        const params = this.props.match.params;
        console.log('params', params)

        this.service.getProductDetails(params.id)
            .then( response => {

                console.log('responseeeeeeeee', response.data)

                let responseData = response.data

                this.setState({                    
                    name: responseData.name,
                    cardRarity: responseData.cardRarity,
                    cardType: responseData.cardType,
                    productDescription: responseData.productDescription,
                    stock: responseData.stock,
                    price: responseData.price,
                    productId: params.id,
                })                
            })
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    addCart = (product) => {

        console.log('product', product);

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');       

        const {clientId, productId, quantity } = this.state;

        const cart = { clientId: loggedUser.id, productId, quantity}
        console.log('cart ',cart)

        console.log("STOCK", this.state.stock)

        if(cart.quantity > this.state.stock ){            

            console.log("to no if sim");
            errorMessage("Quantidade indisponível no estoque")
            return false;

        }else if(this.state.quantity <= 0 || this.state.quantity === ''){
            errorMessage("Insira uma quantidade valida")
        }else{
            this.cartService.addToCart(cart)
                .then(response => {
                    console.log('resposta do carinho', response.data)
                    successMessage("Produto adicionado no carrinho!")
                })
        }
    }

    render(){
        return(
            <>
                <div className="container">
                    <h1 className="mt-4 mb-3">Carta</h1>
                    <hr />
                    <div className="row">                
                    </div>
                    <div className="row">
                    <div className="col-lg-4">
                        <img className="img-fluid rounded mb-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg" alt="" />
                    </div>
                    <div className="col-lg-3">
                        <h3 className="mt-4 mb-3"><strong>{this.state.name}</strong></h3>
                        <p className="card-text"><strong>Raridade de carta:</strong> {this.state.cardRarity}.</p>
                        <p className="card-text"><strong>Tipo de carta:</strong> {this.state.cardType}.</p>
                        <p className="card-text"><strong>Quantidade disponivel:</strong> {this.state.stock}.</p>
                        <p className="card-text">
                            <strong>Quantidade:</strong>
                            <input 
                                type="number"
                                className="form-control col-md-4"
                                id="quantity"
                                name="quantity"                                  
                                maxLength={this.state.stock}
                                value={this.state.quantity}
                                onChange={this.handleChange}
                            >                            
                            </input>
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="card-text mt-4 mb-3 alert alert-success" ><strong>{this.state.price} à vista</strong></h3>
                    </div>
                    <div className="col-lg-2">
                        <button 
                            className="btn btn-lg btn-success btn-block mt-4 mb-3"
                            onClick={this.addCart}>Comprar</button>
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="col-lg-2">
                        <h3><strong>Descrição:</strong></h3>
                    </div>
                    <div className="col-lg-10">
                        <p className="card-text">{this.state.productDescription}</p>
                    </div>
                    </div>                  
                    <hr />
             
                </div>
            
            </>
        )
    }
}
export default withRouter(ProductDetails)
