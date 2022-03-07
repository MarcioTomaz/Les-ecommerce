

import React from "react";
import { withRouter } from "react-router-dom";
import LocalStorageService from "../../service/localStorageService";

import AddresComponent from "../user/userComponent/addressComponent";

import NewAddressService from "../../service/newAddress";
import EditAddressService from "../../service/client/editAddressService";

class AddressList extends React.Component {

    
    state = {

        street: '',
        residencyType: '',
        observation: '',
        number: '',
        district: '',
        zipCode: '',
        logradouro: '',
        city: '',
        country: '',
        state: '',
        addressType: '',        
        client: 2
    }

    constructor(){
        super();
        this.addresService = new NewAddressService();
        this.editAddress = new EditAddressService();
    }

    componentDidMount() {

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        console.log(usuarioLogado.id)

        this.addresService.getAddressDetails(usuarioLogado.id)
            .then( response =>{
                const responseData = response.data;

                console.log(responseData);

                this.setState({

                    street: responseData.street,
                    residencyType: responseData.residencyType,
                    observation: responseData.observation,
                    number: responseData.number,
                    district: responseData.district,
                    zipCode: responseData.zipCode,
                    logradouro: responseData.logradouro,
                    city: responseData.city,
                    country: responseData.country,
                    state: responseData.state,
                    addressType: responseData.addressType  

                })
            })
    }

    render() {
        return (
            <>
            <section className=" card px-5 py-5 mx-5 my-5">

                <h1 className="mt-4 mb-3">Lista - Endereços </h1>
                <hr />
                <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a>

                <hr />

                <div className="container  mx-5 my-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row bg-light col-md-12">
                        <div className="col-lg-1">
                            <ion-icon name="cart-outline" size="large"></ion-icon>
                        </div>
                        <div className="col-lg-8">
                            <p className="card-text">
                                <strong>
                                    {this.state.logradouro} , 
                                    {this.state.number} , 
                                    {this.state.zipCode} ,
                                    {this.state.district} ,                               
                                    {this.state.city} 
                                </strong>
                            </p>
                        </div>                        
                    </div>
                    <hr />
                    <a href="#/editarEndereco" className="btn btn-warning float-right" style={{ maxWidth: '140px' }}>Editar</a>

                    <a href="#/" className="btn btn-danger mb-2" style={{ maxWidth: '140px' }}>Excluir</a>

                </div>


            </div>
        </div>
                <a href="#/meusDados" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
                
        </>
        )
    }
}

export default withRouter(AddressList);