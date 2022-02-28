

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Login extends React.Component {
    render() {
        return (
            <>

                <div className="container  text-white">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body bg-secondary p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                                    <form action="@{/login}" method="POST">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                <label htmlFor="floatingInput">E-mail</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
                                                <label htmlFor="floatingPassword">Senha</label>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Entrar</button>
                                            <small className="form-text font-weight-bold text-white">Esqueceu sua senha? <a href="#/meusDados" className=" bg-white text-primary">Clique aqui</a></small>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(Login);