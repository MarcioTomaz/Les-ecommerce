

import React from "react";
import ProductService from "../../../service/Admin/productService";
import ProductListTable from "./productListTable";
import { withRouter } from "react-router-dom";
import { errorMessage,successMessage } from "../../../components/toastr";
import LocalStorageService from "../../../service/localStorageService";
import CreditCardRegisterService from "../../../service/creditCardRegisterService";
import OrderService from "../../../service/order/orderService";
import { Col, Container, Row } from "react-bootstrap";

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
        this.creditCardService = new CreditCardRegisterService();
        this.orderService = new OrderService();
    }

    componentDidMount(){   

        this.service.getAllProductsAdm()
            .then( response => {
                const responseData = response.data;

                console.log('response.data', response.data)

                this.setState({
                    productList: response.data
                })
            })       
    }

    editAction = (productId) => {

      this.props.history.push(`/editarProduto/${productId}`)        
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
                this.service.getAllProducts()
            })
    }

    render(){
        return(
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Produtos cadastrados</h1>
                    <hr />
                    <a href="#/novoProduto" className="btn btn-secondary" >Adicionar novo produto</a>


                    <Container > 
                    <Row className="justify-content-md-center">
                        <div className="container">
                            <Col md={6}>
                                <ProductListTable
                                    productList={this.state.productList}
                                    editAction={this.editAction}
                                    changeActive={this.changeActive}
                                />
                                </Col>
                            </div>
                            <a href="#/administracao" className="btn btn-secondary">Cancelar</a>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default withRouter(ProductList);