

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { errorMessage, successMessage } from "../../components/toastr";

import NewAddressService from "../../service/newAddress";
import SelectMenu from "../../components/selectMenu";
import LocalStorageService from "../../service/localStorageService";
import EditAddressService from "../../service/client/editAddressService";

class EditAddress extends React.Component {


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
        client: null,
        id:'',
    }

    constructor(){
        super();
        this.addresService = new NewAddressService();
        this.editAddress = new EditAddressService();
    }


    componentDidMount() {

        // const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');       
       
        // console.log(usuarioLogado.id);

        const params = this.props.match.params;

        console.log('id', params)

        this.addresService.getAddressDetails(params.id)
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
                    addressType: responseData.addressType,
                    id: params.id

                })

            })
    }

    updateAddress = () =>{    
    
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');

        const {street, residencyType, observation, number, district, zipCode, logradouro, city,
                country, state, addressType, id} = this.state;

        const updateAddress = {street, residencyType, observation, number, district, zipCode, logradouro, city,
            country, state, addressType, client: loggedUser.id, id};
           

            this.addresService.update(updateAddress)
            .then( response => {

                let qtdMsg = 0;

                console.log(response.data);
                
                console.log(updateAddress);

                console.log("QUANTIDADES STRATEGY",qtdMsg);

                if( qtdMsg === 0){
                    console.log(qtdMsg);

                    console.log("Salvou");

                    successMessage("Endere??o atualizado com sucesso!");
                    this.props.history.push('/meusDados');

                }else{

                    for( let i = 0; i < qtdMsg; i++){
                        successMessage(response.data.msg[i])
                    }
                }
            }).catch( error => {

                console.log("catch");
                console.log(error.response)
                console.log(this.state)

                errorMessage("Erro ao fazer a requisi????o.");
            })        
        
    }
    
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render() {

        const addressType = this.addresService.getAddresType();

        return (

            <section className=" card px-5 py-5 mx-5 my-5">
                <div fragment="novoEndereco">

                    <div className="my-2 text-center">
                        <h1 className="display-5 text-primary">Editar Endere??o</h1>
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
                            <label htmlFor="inputNumero">N??mero</label>
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
                                <label htmlFor="inputPais">Pa??s</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPais" 
                                    placeholder="Pa??s" 
                                    name="country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                     />  
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputTipoTelefone">Tipo Endere??o</label>
                            <SelectMenu id="inputType"
                                lista={addressType}
                                className="form-control"
                                name="addressType"
                                value={this.state.addressType}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputComplemento">Observa????es</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputComplemento" 
                                placeholder="Observa????es"
                                name="observation"
                                required={true} 
                                value={this.state.observation}
                                onChange={this.handleChange}
                                />
                        </div>
                        <button onClick={this.updateAddress} type="button" className="btn btn-primary">Salvar</button>

                    </form>
                </div>

                <a href="#/listaEndereco" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
        )
    }
}

export default withRouter(EditAddress);