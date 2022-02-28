

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class NewAddress extends React.Component {

    render() {
        return (

            <section className=" card px-5 py-5 mx-5 my-5">
                <div fragment="novoEndereco">

                    <div className="my-2 text-center">
                        <h1 className="display-5 text-primary">Novo Endereço</h1>
                    </div>
                    <form action="/meusDados">
                        <div className="form-group">
                            <label htmlFor="inputLogradouro">Logradouro</label>
                            <input type="text" className="form-control" id="inputLogradouro" placeholder="Logradouro" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputRua">Rua</label>
                            <input type="text" className="form-control" id="inputRua" placeholder="Rua n sei onde" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputNumero">Número</label>
                            <input type="text" className="form-control numero" id="inputNumero" placeholder="" />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputCEP">CEP</label>
                                <input type="text" className="form-control" id="inputCEP" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputBairro">Bairro</label>
                                <input type="text" className="form-control" id="inputBairro" placeholder="Bairro" />
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputTipoResidencia2">Tipo de Residencia</label>
                                <select id="inputTipoResidencia2" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option>Casa</option>
                                    <option>Apartamento</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label >Tipo de Logradouro</label>
                                <select id="inputTipoTipoLogradouro" className="form-control">
                                    <option selected>Escolha...</option>
                                    <option>Tipo logradouro 1</option>
                                    <option>Tipo Logradouro 2</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputCidade2">Cidade</label>
                                <select id="inputCidade2" className="form-control">
                                    <option>Cidade 1</option>
                                    <option>Cidade 2</option>
                                    <option>Cidade 3</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputEstado2">Estado</label>
                                <select id="inputEstado2" className="form-control">
                                    <option>Estado 1</option>
                                    <option>Estado 2</option>
                                    <option>Estado 3</option>
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="inputPais2">País</label>
                                <select id="inputPais2" className="form-control">
                                    <option>País 1</option>
                                    <option>País 2</option>
                                    <option>País 3</option>
                                </select>
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="inputComplemento">Complemento</label>
                            <input type="text" className="form-control" id="inputComplemento" placeholder="Apartamento, Andar, etc" />
                        </div>
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                    </form>
                </div>

                <a href="#/suaConta" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
        )
    }
}

export default withRouter(NewAddress);