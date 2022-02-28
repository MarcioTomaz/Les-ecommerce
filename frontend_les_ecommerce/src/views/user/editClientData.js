

import { render } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class EditClientData extends React.Component {

    render() {
        return (
            <>
                <section className=" mb-5 my-5">
                    <form className="container mt-5 mb-5" action="@{/meusDados}">
                        <div className="card px-5 py-5">
                            <h1 className="text-center">Alterar Dados</h1>
                            <hr />

                            <div className="form-group col-md-6">
                                <label ><strong>Email:</strong> </label>
                                <input type="email" className="form-control" field="*{usuario.email}" />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Nome:</strong> </label>
                                <input type="text" className="form-control" field="*{usuario.nome}" />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>CPF:</strong> </label>
                                <input type="text" className="form-control" id="inputCPF" field="*{cpf}" />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Data de Nascimento:</strong> </label>
                                <input type="date" className="form-control" value="2021-08-14" />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Telefone: </strong></label>
                                <input type="text" className="form-control" id="inputTelefone" field="*{telefone}" />
                            </div>

                            <div className="form-group col-md-6">
                                <a href="@{/meusDados}" className="btn btn-danger mb-2 mr-4" style={{maxWidth: '140px'}}>Cancelar</a>
                                <button type="submit" className="btn btn-primary mb-2 mr-4">Alterar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default withRouter(EditClientData)