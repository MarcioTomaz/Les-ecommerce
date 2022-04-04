


import React from "react";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import { errorMessage, successMessage } from "../../../components/toastr";
import ProductService from "../../../service/Admin/productService";
import SelectMenu from "../../../components/selectMenu";


class EditProduct extends React.Component{

    state ={

        name: '',
        cardRarity: '',
        cardType: '',
        productDescription: '',     
        stock: '',       
        price: '',
        erros:[],
    }

    constructor(){
        super();
        this.service = new ProductService();
    }

    componentDidMount(){
        const params = this.props.match.params;

        this.service.getProductDetails(params.id)
            .then( response => {
                const responseData = response.data;

                console.log(responseData);

                this.setState({
                    name: responseData.name,
                    cardRarity: responseData.cardRarity,
                    cardType: responseData.cardType,
                    productDescription: responseData.productDescription,
                    stock: responseData.stock,
                    price: responseData.price,
                    id: params.id
                })
            })
    }

    saveProduct = () => {
        
        const {id, name, stock, productDescription, cardRarity, cardType, price} = this.state;

        const product = { id, name, stock, productDescription, cardRarity, cardType, price};

        this.service.save( product )
            .then( response => {

                successMessage("Produto salvo com sucesso!");

                this.props.history.push('/estoque');

            }).catch( error => {
                
                console.log(error.response);
                let teste = error.response.data;
                console.log(teste)
                errorMessage(teste[1])

                for( let i = 0; i< teste.length; i++){
                    errorMessage(teste[i])
                }
            })
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render(){
        const rarity = this.service.getRarity();
        const type = this.service.getType();

        return(
            <>
                <section className="card px-5 py-5 mx-5 my-5">
                  <div className="container">
                    <h1 className="mt-4 mb-3">Cadastrar Produtos</h1>
                    <hr />
                    <div className="row">
                    </div>
                    
                        <div className="row">
                            <div className="col-md-9 personal-info">
                                <form className="form-horizontal" action="/meusDados">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Nome da carta:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="inputName"
                                                name="name"                                                
                                                value={this.state.name}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Raridade da carta:</label>
                                        <div className="col-6">
                                            <SelectMenu
                                                className="form-control"
                                                type="text"
                                                id="inputRaridade"
                                                lista={rarity}
                                                name="cardRarity"                                                
                                                value={this.state.cardRarity}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Tipo da carta:</label>
                                        <div className="col-6">
                                            <SelectMenu
                                                className="form-control"
                                                type="text"
                                                id="inputTipo"
                                                lista={type}
                                                name="cardType"                                                
                                                value={this.state.cardType}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Descrição da carta:</label>
                                        <div className="col-lg-8">
                                            <textarea
                                                className="form-control"
                                                type="text"
                                                id="inputDescricao"
                                                name="productDescription"                                                
                                                value={this.state.productDescription}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Quantidade de cartas:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="number"
                                                id="inputStock"
                                                name="stock"                                                
                                                value={this.state.stock}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Preço:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="number"
                                                id="inputPreco"
                                                name="price"                                                
                                                value={this.state.price}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-8">
                                            <button onClick={this.saveProduct} type="button" className="btn btn-primary">Cadastrar</button>
                                            <span></span>
                                            <a href="#/administracao" className="btn btn-secondary">Cancelar</a>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>                        
            </>
        )
    }

}

export default withRouter(EditProduct);