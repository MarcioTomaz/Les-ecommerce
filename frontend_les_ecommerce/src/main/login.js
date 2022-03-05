

import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { errorMessage } from "../components/toastr";
import ClientService from "../service/clientService";
import LocalStorageService from "../service/localStorageService";

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    constructor(){
        super();
        this.service = new ClientService();
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    login = async () => {
        this.service.authenticate({
            email: this.state.email,
            password: this.state.password

        }).then(response => {            

            LocalStorageService.addItem('_usuario_logado', response.data)
            this.props.history.push('/meusDados')

        }).catch(error => {
            console.log(this.state);
            console.log(error.response.data);
            errorMessage(error.response.data);
        })
    }

    prepareCadastrar = () =>{
        this.props.history.push('/register');
    }

    render() {
        return (
            <>
                <div className="container  text-white">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card border-0 shadow rounded-3 my-5">
                                <div className="card-body bg-secondary p-4 p-sm-5">
                                    <h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingInput"
                                                placeholder="name@example.com"
                                                value={this.state.email}
                                                name="email"
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="floatingInput">E-mail</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="floatingPassword"
                                                placeholder="Senha"
                                                value={this.state.password}
                                                name="password"
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="floatingPassword">Senha</label>
                                        </div>
                                        <div className="d-grid">
                                            <button onClick={this.login} className="btn btn-success mt-3">Entrar</button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger mt-3">Cadastrar</button>
                                        </div>
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