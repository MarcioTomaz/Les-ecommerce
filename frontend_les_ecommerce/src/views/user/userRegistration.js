
import React from "react";

import { withRouter } from 'react-router-dom';



class UserRegistration extends React.Component {

    render() {
        return (
            <section fragment="cadastro" className="container bg-secondary px-5 py-5 mb-5 my-5 font-weight-bold text-white">
                <div className="my-5 text-center">
                    <h1 className="display-4 font-weight-bold text-white">Cadastre-se Agora</h1>
                </div>
                <section className="row justify-content-center align-items-center ">

                    <form id="formCadastro" action="@{/cadastrar}" method="POST">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail">E-mail</label>
                                <input type="email" className="form-control" id="inputEmail" field="*{usuario.email}" />
                            </div>                

                            <div className="form-group col-md-6">
                                <label htmlFor="inputSenha">Senha</label>
                                <input type="password" className="form-control" id="inputSenha" field="*{usuario.senha} " />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputNome">Nome</label>
                            <input type="text" className="form-control" id="inputNome" placeholder="Insira seu nome" field="*{usuario.nome}" />
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputGenero">Gênero</label>
                                <select id="inputGenero" className="form-control" >
                                    <option >Masculino</option>
                                    <option >Feminino</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputDataNasc">Data de Nascimento</label>
                                <input type="date" id="inputDataNasc" className="form-control" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputTelefone">Telefone</label>
                            <input type="text" className="form-control" id="inputTelefone" placeholder="Insira o seu Telefone"
                                field="*{telefone}" />

                        </div>

                        <div className="form-group">
                            <label htmlFor="inputCPF">CPF</label>
                            <input type="text" className="form-control " id="inputCPF" placeholder="Insira o seu CPF"
                                field="*{cpf}" />

                        </div>
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </form>
                </section>
            </section>
        )
    }

}

export default withRouter(UserRegistration);

