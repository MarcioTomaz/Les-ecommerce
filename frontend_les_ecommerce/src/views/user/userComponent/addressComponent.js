

import React from "react";

function AddresComponent() {
    return (
        <div className="container  mx-5 my-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row bg-light col-md-12">
                        <div className="col-lg-1">
                            <ion-icon name="cart-outline" size="large"></ion-icon>
                        </div>
                        <div className="col-lg-8">
                            <p className="card-text">
                                Logradouro,
                                numero,
                                complemento,
                                cep,
                                bairro,
                                cidade
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div className="htmlForm-check">
                                <input className="htmlForm-check-input" type="checkbox" id="enderecoEntrega" />
                                <label className="htmlForm-check-label" htmlFor="enderecoEntrega">
                                    Endereço Entrega
                                </label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="htmlForm-check">
                                <input className="htmlForm-check-input" type="checkbox" id="enderecoCobranca" />
                                <label className="htmlForm-check-label" htmlFor="enderecoCobranca">
                                    Endereço Cobrança
                                </label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="htmlForm-check">
                                <input className="htmlForm-check-input" type="checkbox" id="cobrancaPreferencial" />
                                <label id="cobrancaPreferencial" className="htmlForm-check-label" htmlFor="cobrancaPreferencial">
                                    Preferencial
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <a href="#/novoEndereco" className="btn btn-warning float-right" style={{ maxWidth: '140px' }}>Editar</a>

                    <a href="#/" className="btn btn-danger mb-2" style={{ maxWidth: '140px' }}>Excluir</a>

                </div>


            </div>
        </div>
    )
}

export default AddresComponent;