

import { render } from "@testing-library/react";

import ClientService from "../../service/clientService";

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import LocalStorageService from "../../service/localStorageService";
import { errorMessage, successMessage } from "../../components/toastr";

class ClientDetails extends React.Component {

    state = {
        email: '',
        name: '',
    }

    constructor() {
        super();
        this.service = new ClientService();
    }

    deleteClient = () => {

        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        this.service.delete(usuarioLogado.id)
            .then( response => {
                console.log(response.data);

                let qtdMsg = response.data.msg.length;

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
            })

    }

    componentDidMount() {
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        this.service.getClientDetails(usuarioLogado.id)
            .then(response => {

                console.log(response.data)

                console.log("to no then")

                const reponseData = response.data;

                console.log(reponseData)
                console.log(response.data)

                this.setState({
                    email: reponseData.email,
                    name: reponseData.name,
                    cpf: reponseData.cpf,
                    gender: reponseData.gender,
                    birthDate: reponseData.birthDate,
                    type: reponseData.type,
                    areCode: reponseData.areaCode,
                    phoneNumber: reponseData.phoneNumber
                })
            })

    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <>
                <section className=" mb-5 my-5">

                    <form className="container mt-5 mb-5" >

                        <div className="card px-5 py-5">
                            <h1 className="text-center">Detalhes do perfil</h1>
                            <hr />
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label ><strong>Email:</strong> {this.state.email} </label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label ><strong>Name:</strong> {this.state.name}</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label ><strong>CPF:</strong> {this.state.cpf} </label>
                            </div>

                            <div className="form-group">
                                <label ><strong>Data de Nascimento:</strong> {this.state.birthDate}</label>
                            </div>

                            <div className="form-group">
                                <label ><strong>Gênero: </strong> {this.state.gender}</label>
                            </div>

                            <div className="form-group">
                                <label ><strong>Tipo:</strong> {this.state.type}</label>
                            </div>

                            <div className="form-group">
                                <label ><strong>DDD:</strong> {this.state.areCode}</label>
                            </div>

                            <div className="form-group">
                                <label ><strong>Telefone:</strong> {this.state.phoneNumber}</label>
                            </div>

                            <div className="form-group">

                                <a href="#/meusDados" className="btn btn-outline-secondary mb-2" style={{ maxWidth: '140px' }}>Voltar</a>

                                <a href="#/editarCliente" className="btn btn-primary mb-2" style={{ maxWidth: '140px' }}>Alterar Dados</a>

                                <button onClick={this.deleteClient} type="button" className="btn btn-danger mt-3">Inativar Conta</button>


                                {/* <a href="#/alterarSenha" className="btn btn-dark mb-2 text-white" style={{ maxWidth: '140px' }}>Alterar Senha</a> */}

                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default withRouter(ClientDetails)