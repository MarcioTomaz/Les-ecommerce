

import React from "react";
import { withRouter } from "react-router-dom";
import LocalStorageService from "../../service/localStorageService";

import AddresComponent from "../user/userComponent/addressComponent";

import NewAddressService from "../../service/newAddress";
import EditAddressService from "../../service/client/editAddressService";

import { errorMessage, successMessage } from "../../components/toastr";
import AddressListTable from "./addressListTable";


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
        client: null,//arrumar id dps rrçrç
        addressList:[]        
    }

    constructor() {
        super();
        this.addresService = new NewAddressService();
        // this.editAddress = new EditAddressService();
    }

    editAddress = (addressId) =>{

        console.log('ID', addressId);

        this.props.history.push(`/editarEndereco/${addressId}`)
    }

    deleteAddress = (addressId) => {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        console.log("to no delete address")

        this.addresService.deleteId(addressId)
            .then(response => {

                console.log(response.data);

                let qtdMsg = response.data.msg.length;

                if (qtdMsg === 0) {

                    console.log(qtdMsg);

                    console.log("Deletou");

                    successMessage("Endereço deletado com sucesso! ");

                    this.props.history.push('/meusDados');

                } else {

                    for (let i = 0; i < qtdMsg; i++) {
                        errorMessage(response.data.msg[i])
                    }
                }

            }).catch(error => { })
    }

    componentDidMount() {

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        console.log(usuarioLogado.id)

        this.addresService.getAllAddress(usuarioLogado.id)
            .then(response => {
                const responseData = response.data;

                console.log(responseData);

                this.setState({

                    addressList: response.data
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

                    <div className="container">
                        <AddressListTable 
                            addressList={this.state.addressList} 
                            deleteAddress={this.deleteAddress}
                            editAddress={this.editAddress}
                        />
                    </div>

                    <a href="#/meusDados" className="btn btn-outline-secondary mb-2" style={{ maxWidth: '140px' }}>Voltar</a>

                </section>

            </>
        )
    }
}

export default withRouter(AddressList);