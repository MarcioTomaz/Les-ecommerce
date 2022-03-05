

import { render } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import SelectMenu from "../../components/selectMenu";
import ClientService from "../../service/clientService";

class EditClientData extends React.Component {    


    state = {
        email: '',
        name: '',
        gender: '',
        birthDate: '',                
        phoneNumber: '',
        cpf: '',
        areaCode: '',
        type:''
    }

    constructor(){
        super();
        this.ClientService = new ClientService();
    }

    updateClient = () => {
        const { email, name, gender, birthDate, phoneNumber, cpf, areaCode, type } = this.state;
    }


    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render() {

        const gender = this.ClientService.getGender();
        const type = this.ClientService.getType();

        return (
            <>
                <section className=" mb-5 my-5">
                    <form className="container mt-5 mb-5" action="#/meusDados">
                        <div className="card px-5 py-5">
                            <h1 className="text-center">Alterar Dados</h1>
                            <hr />

                            <div className="form-group col-md-6">
                                <label ><strong>Email:</strong> </label>
                                <input 
                                    type="email" 
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Nome:</strong> </label>
                                <input 
                                    type="text" 
                                    className="form-control"  
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="gender">Gênero</label>
                                <SelectMenu id="inputGenero"
                                    lista={gender}
                                    className="form-control"
                                    name="gender"
                                    value={this.state.gender}
                                    onChange={this.handleChange} />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>CPF:</strong> </label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputCPF" 
                                    name="cpf"
                                    value={this.state.cpf}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Data de Nascimento:</strong> </label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    name="birthDate"
                                    value={this.state.birthDate}
                                    onChange={this.handleChange}
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Tipo : </strong></label>
                                <SelectMenu id="inputType"
                                lista={type}
                                className="form-control"
                                name="type"
                                value={this.state.type}
                                onChange={this.handleChange} />
                            </div>

                            
                            <div className="form-group col-md-6">
                                <label ><strong>DDD: </strong></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputTelefone" 
                                    name="areaCode"
                                    maxLength="3"
                                    value={this.state.areaCode}
                                    onChange={this.handleChange}                                    
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <label ><strong>Telefone: </strong></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputTelefone" 
                                    name="phoneNumber"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange}                                    
                                    />
                            </div>

                            <div className="form-group col-md-6">
                                <a href="#/meusDados" className="btn btn-danger mb-2 mr-4" style={{maxWidth: '140px'}}>Cancelar</a>
                                <button onClick={this.updateClient} type="button" className="btn btn-primary mb-2 mr-4">Alterar</button>
                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}

export default withRouter(EditClientData)