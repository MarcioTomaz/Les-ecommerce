

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { errorMessage, successMessage } from "../../components/toastr";

import NewAddressService from "../../service/newAddress";
import SelectMenu from "../../components/selectMenu";
import LocalStorageService from "../../service/localStorageService";
class NewAddress extends React.Component {

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
        client: null
    }

    constructor(){
        super();
        this.service = new NewAddressService();
    }

    saveAddress = () =>{

        const loggedUser = LocalStorageService.obterItem('_usuario_logado');
        console.log("USUARIO LOGADO", loggedUser.id)

        console.log('User LOGADO ID',loggedUser.id)

        const {street, residencyType, observation, number, district, zipCode, logradouro, city,
                country, state, addressType} = this.state;

        const address = {street, residencyType, observation, number, district, zipCode, logradouro, city,
            country, state, addressType, client: loggedUser.id};

            this.service.save(address)
            .then( response => {
                //let qtdMsg = response.data.msg.length;
                let qtdMsg = 0;

                console.log( address )

                console.log("QUANTIDADES STRATEGY",qtdMsg);

                if( qtdMsg === 0){
                    console.log(qtdMsg);

                    console.log("Salvou");

                    successMessage("Endereço cadastrado com sucesso!");
                    this.props.history.push('/meusDados');

                }else{

                    for( let i = 0; i < qtdMsg; i++){
                        errorMessage(response.data.msg[i])
                    }
                }
            }).catch( error => {

                console.log("catch");
                console.log(error.response)
                console.log(this.state)

                errorMessage("Erro ao fazer a requisição.");
            })        
        
    }
    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render() {

        const addressType = this.service.getAddresType();

        return (

            <section className=" card px-5 py-5 mx-5 my-5">
                <div fragment="novoEndereco">

                    <div className="my-2 text-center">
                        <h1 className="display-5 text-primary">Novo Endereço</h1>
                    </div>
                    <form action="/meusDados">
                        <div className="form-group">
                            <label htmlFor="inputLogradouro">Logradouro</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputLogradouro" 
                                placeholder="Logradouro"
                                name="logradouro"
                                value={this.state.logradouro}
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputRua">Rua</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputRua" 
                                placeholder="Rua n sei onde" 
                                name="street"
                                value={this.state.street}
                                onChange={this.handleChange}
                                />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputNumero">Número</label>
                            <input 
                                type="text" 
                                className="form-control numero" 
                                id="inputNumero" 
                                placeholder="" 
                                name="number" 
                                value={this.state.number}
                                onChange={this.handleChange}
                                />
                                
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCEP">CEP</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputCEP" 
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputBairro">Bairro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputBairro" 
                                    placeholder="Bairro"
                                    name="district" 
                                    value={this.state.district}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputTipoResidencia">Tipo de Residencia</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputTipoResidencia" 
                                    placeholder="Tipo de Residencia"
                                    name="residencyType" 
                                    value={this.state.residencyType}
                                    onChange={this.handleChange}
                                    />
                            </div>                 

                            <div className="form-group col-md-4">
                                <label htmlFor="inputCidade">Cidade</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputCidade" 
                                    placeholder="Cidade" 
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    />  

                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputEstado">Estado</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputEstado" 
                                    placeholder="Estado" 
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    />                               
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputPais">País</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPais" 
                                    placeholder="País" 
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                     />  
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputTipoTelefone">Tipo Endereço</label>
                            <SelectMenu id="inputType"
                                lista={addressType}
                                className="form-control"
                                name="addressType"
                                value={this.state.addressType}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputComplemento">Observações</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputComplemento" 
                                placeholder="Observações"
                                name="observation"
                                required={true} 
                                value={this.state.observation}
                                onChange={this.handleChange}
                                />
                        </div>
                        <button onClick={this.saveAddress} type="button" className="btn btn-primary">Cadastrar</button>

                    </form>
                </div>

                <a href="#/listaEndereco" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
        )
    }
}

export default withRouter(NewAddress);