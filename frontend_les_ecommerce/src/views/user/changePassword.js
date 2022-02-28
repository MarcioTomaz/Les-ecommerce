


import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ChangePassword extends React.Component {

    render() {
        return (
            <>
                <section className=" mb-5 my-5 ">
                    <form className="container mt-5 mb-5" fragment="alterarSenha" action="/meusDados">
                        <div className="card px-5 py-5">
                            <h1 className="text-center">Alterar Senha</h1>
                            <hr />
                            <div className="row">
                                <div className="form-group col-md-6">

                                    <label ><strong>Senha atual:</strong> </label>
                                    <input className="form-control" type="password" />

                                    <hr />

                                    <label ><strong>Nova senha:</strong> </label>
                                    <input className="form-control" type="password" />

                                    <hr />

                                    <label ><strong>Confirmar Senha:</strong> </label>
                                    <input className="form-control" type="password" />
                                </div>
                            </div>

                            <div className="form-group col-md-6">

                            </div>

                            <div className="form-group">
                                <a className="btn btn-danger mb-2" href="#/meusDados" style={{ maxWidth: '140px' }}>Cancelar</a>
                                <button type="submit" className="btn btn-primary mb-2">Alterar</button>

                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }

}

export default withRouter(ChangePassword)