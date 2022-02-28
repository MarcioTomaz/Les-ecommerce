

import { render } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ClientDetails extends React.Component {

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
                                        <label ><strong>Email:</strong> Email@gmail.com</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label ><strong>Nome:</strong> Marcio Tomaz</label>
                                </div>

                                <div className="form-group">
                                    <label ><strong>CPF:</strong> 123.123.123-12</label>
                                </div>

                                <div className="form-group">
                                    <label ><strong>Data de Nascimento:</strong> 14/08/1999</label>
                                </div>

                                <div className="form-group">
                                    <label ><strong>Sexo: </strong>M</label>
                                </div>

                                <div className="form-group">
                                    <label ><strong>Telefone:</strong> 40028922</label>
                                </div>

                                <div className="form-group">

                                    <a href="@{/suaConta}" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

                                    <a href="#/editarCliente" className="btn btn-primary mb-2" style={{maxWidth: '140px'}}>Alterar Dados</a>

                                    <a className="btn btn-danger mb-2" data-toggle="modal" data-target="#modalInativar" href="#/"
                                        style={{maxWidth: '140px'}}>Inativar Conta</a>

                                    <a href="#/alterarSenha" className="btn btn-dark mb-2 text-white" style={{maxWidth: '140px'}}>Alterar Senha</a>

                                </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default withRouter(ClientDetails)