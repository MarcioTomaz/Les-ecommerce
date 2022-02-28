

import React from "react";
import { withRouter } from "react-router-dom";


class CreditCardRegister extends React.Component {
    render() {
        return (
            <>
                <section className="card px-5 py-5 mx-5 my-5">
                    <div fragment="adicionarCartoes" className="container">
                        <h1 className="mt-4 mb-3">Cadastrar cartão de crédito</h1>
                        <hr />
                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="col-md-9 personal-info">
                                <form className="form-horizontal" action="/meusDados">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Número do cartão:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control CARTAO" name="cartao_numero" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Nome e sobrenome:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text" name="cartao_titular_nome" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Mês de vencimento:</label>
                                        <div className="col-lg-2">
                                            <select className="form-control" name="cartao_data_vencimento_mes">
                                                <option>01</option>
                                                <option>02</option>
                                                <option>03</option>
                                                <option>04</option>
                                                <option>05</option>
                                                <option>06</option>
                                                <option>07</option>
                                                <option>08</option>
                                                <option>09</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Ano de vencimento:</label>
                                        <div className="col-lg-2">
                                            <select className="form-control" name="cartao_data_vencimento_ano">
                                                <option>2020</option>
                                                <option>2021</option>
                                                <option>2022</option>
                                                <option>2023</option>
                                                <option>2024</option>
                                                <option>2025</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Preferencial?:</label>
                                        <div className="col-lg-8">
                                            <input type="checkbox" id="preferential" name="preferential" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Código de segurança:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text" id="inputCodigo" name="cartao_codigo_seguranca" minLength="3"
                                                maxLength="3" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">CPF do titular do cartão:</label>
                                        <div className="col-lg-8">
                                            <input className="form-control" type="text" id="inputCPF" name="cartao_cpf_titular" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Bandeira: </label>
                                        <div className="col-lg-8">
                                            <select className="form-control" type="text" name="cartao_cartao_bandeira">
                                                <option>MasterCard</option>
                                                <option>Visa</option>
                                                <option>Elo</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-8">
                                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                                            <span></span>
                                            <a href="#/cartoes" className="btn btn-secondary">Cancelar</a>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>
            </>
        )
    }
}

export default withRouter(CreditCardRegister)