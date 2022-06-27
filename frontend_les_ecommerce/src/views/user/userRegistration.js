
import React from "react";

import { withRouter } from 'react-router-dom';

import ClientService from "../../service/clientService";
import { errorMessage, successMessage } from "../../components/toastr";
import SelectMenu from "../../components/selectMenu";

import { ClientClass } from "./class/clientClass";
class UserRegistration extends React.Component {

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        gender: null,
        birthDate: null,
        type: null,
        areaCode: '',
        phoneNumber: '',
        cpf: ''
    }

    constructor() {
        super();
        this.service = new ClientService();
    }

    saveClient = () => {     

        const { email, password, confirmPassword, name, gender, birthDate, type, areaCode, phoneNumber, cpf } = this.state;

        const preencher = { email, password, confirmPassword, name, gender, birthDate, type, areaCode, phoneNumber, cpf };

        let clientClass = new ClientClass(email, password, confirmPassword, name, gender, birthDate, type, areaCode, phoneNumber, cpf);        

        console.log(clientClass)

        this.service.save(clientClass)
            .then(response => {  

                let qtdMsg = response.data.msg.length;

                console.log("QUANTIDADES STRATEGY", qtdMsg);

                console.log(ClientClass)

                if( qtdMsg === 0 ){
                    
                    console.log(qtdMsg);

                    console.log("Salvou");

                    successMessage("Usuário cadastrado com sucesso! Faça o login para continuar. ");
                    this.props.history.push('/login');

                }else{

                    for( let i = 0; i < qtdMsg; i++){
                        errorMessage(response.data.msg[i])
                    }
                }
            
            }).catch(error => {

                console.log("catch");
                console.log(error)

                errorMessage("Erro ao fazer a requisição.");             
            })
    }

    cancel = () => {
        this.props.history.push('/login');
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render() {

        const gender = this.service.getGender();
        const type = this.service.getType();

        return (
            <section className="container bg-secondary px-5 py-5 mb-5 my-5 font-weight-bold text-white">
                <div className="my-5 text-center">
                    <h1 className="display-4 font-weight-bold text-white">Cadastre-se Agora</h1>
                </div>
                <section className="row justify-content-center align-items-center ">

                    <form id="formCadastro" method="POST">
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail">E-mail</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputSenha">Senha</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputSenha"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputConfirmSenha">Confirmar senha</label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    className="form-control"
                                    id="inputConfirmSenha"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="inputNome">Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputNome"
                                placeholder="Insira seu nome"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="gender">Gênero</label>
                                <SelectMenu id="inputGenero"
                                    lista={gender}
                                    className="form-control"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputDataNasc">Data de Nascimento</label>
                                <input
                                    type="date"
                                    id="inputDataNasc"
                                    className="form-control"
                                    name="birthDate"
                                    value={this.state.birthDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputTipoTelefone">Tipo Telefone</label>
                            <SelectMenu id="inputType"
                                lista={type}
                                className="form-control"
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="areaCode">DDD</label>
                            <input
                                type="text"
                                className="form-control col-md-4"
                                id="areaCode"
                                maxLength="3"
                                placeholder="Insira o DDD"
                                name="areaCode"
                                value={this.state.areaCode}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="inputTelefone">Telefone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputTelefone"
                                placeholder="Insira o seu Telefone"
                                name="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputCPF">CPF</label>
                            <input
                                type="text"
                                className="form-control "
                                id="inputCPF"
                                placeholder="Insira o seu CPF"
                                maxLength="11"
                                name="cpf"                                
                                value={this.state.cpf}
                                onChange={this.handleChange}
                            />

                        </div>
                        <button onClick={this.saveClient} type="button" className="btn btn-primary mt-3">Salvar</button>
                        <button onClick={this.cancel} type="button" className="btn btn-danger mt-3">Cancelar</button>
                    </form>
                </section>
            </section>
        )
    }

}

export default withRouter(UserRegistration);

