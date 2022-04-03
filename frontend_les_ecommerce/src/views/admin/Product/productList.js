

import React from "react";
import ProductService from "../../../service/Admin/productService";
import ProductListTable from "./productListTable";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../components/toastr";

class ProductList extends React.Component{

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
    }

    componentDidMount(){

        this.service.getAllProducts()
            .then( response => {
                const responseData = response.data;

                this.setState({
                    productList: response.data
                })
            })
    }

    editAction = () => {

    }

    changeActive = (productId) => {
        this.service.changeActive(productId)
            .then( response => {

                if(response.data.deleted){
                    successMessage("Produto inativado com sucesso!")
                    this.props.history.push('/estoque');

                }else{
                    successMessage("Produto inativado com sucesso!")
                                    this.props.history.push('/estoque');

                }   
            })
    }

    render(){
        return(
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Produtos cadastrados</h1>
                    <hr />
                    <a href="#/novoProduto" className="btn btn-secondary" >Adicionar novo produto</a>

                    <div className="container">
                        <ProductListTable
                            productList={this.state.productList}
                            editAction={this.editAction}
                            changeActive={this.changeActive}
                        />
                    </div>

                </section>
            </>
        )
    }
}

export default withRouter(ProductList);