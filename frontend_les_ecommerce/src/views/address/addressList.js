

import React from "react";
import { withRouter } from "react-router-dom";
import LocalStorageService from "../../service/localStorageService";

import AddresComponent from "../user/userComponent/addressComponent";

import NewAddressService from "../../service/newAddress";
import EditAddressService from "../../service/client/editAddressService";

import { errorMessage, successMessage } from "../../components/toastr";


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

    deleteAddress = () => {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        console.log("to no delete address")

        this.addresService.deleteId(usuarioLogado.id)
            .then( response => {

                console.log(response.data);

                let qtdMsg = response.data.msg.length;

                if( qtdMsg === 0 ){
                    
                    console.log(qtdMsg);

                    console.log("Deletou");

                    successMessage("Endereço deletado com sucesso! ");

                    this.props.history.push('/meusDados');

                }else{

                    for( let i = 0; i < qtdMsg; i++){
                        errorMessage(response.data.msg[i])
                    }
                }

            }).catch( error =>{})
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

                    <button onClick={this.deleteAddress} type="button" className="btn btn-danger mt-3">Excluir</button>

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