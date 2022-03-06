

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

                <AddresComponent />          

                <a href="#/meusDados" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
                
        </>
        )
    }
}

export default withRouter(AddressList);