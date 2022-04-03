

import React from "react";
import { withRouter } from "react-router-dom";
import CreditCardRegisterService from "../../service/creditCardRegisterService";
import SelectMenu from "../../components/selectMenu";
import LocalStorageService from "../../service/localStorageService";
import { errorMessage, successMessage } from "../../components/toastr";

class CreditCardRegister extends React.Component {


    state = {
        creditCardNumber: '',
        cardHolder: '',
        expirationDateMonth: '',
        expirationDateYear: '',
        cardSecurity: '',
        cardHolderCpf: '',
        cardPreferencial: true,
        cardFlag: '',
        client: null
    }

    constructor() {
        super();
        this.service = new CreditCardRegisterService();
    }

    saveCard = () => {
        const loggedUser = LocalStorageService.obterItem('_usuario_logado');
        console.log("USUARIO LOGADO", loggedUser.id);

        const { creditCardNumber, cardHolder, expirationDateMonth, expirationDateYear, cardSecurity,
                cardHolderCpf, cardPreferencial, cardFlag } = this.state;

        const creditCard = { creditCardNumber, cardHolder, expirationDateMonth, expirationDateYear, cardSecurity,
            cardHolderCpf, cardPreferencial, cardFlag, client: loggedUser.id }
        
            this.service.save( creditCard )
                .then( response => {
                    let qtdMsg = 0;

                    console.log( creditCard)

                    console.log("QUANTIDADES STRATEGY", qtdMsg);

                    if ( qtdMsg === 0 ){
                        console.log(qtdMsg);

                        console.log('salvou');

                        successMessage("Cartão salvo com sucesso!");

                        this.props.history.push('/meusDados');

                    }else{

                        for( let i = 0; i < qtdMsg; i++){

                            errorMessage(response.data.msg[i])
                        }
                    }
                }).catch( error => {
                    console.log("catch");
                    console.log(error.response)
                    console.log(this.state)
    
                    errorMessage("Erro ao fazer a requisição.");
                } )
    }


    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }

    render() {

        const month = this.service.getAddressMonth();
        const year = this.service.getAddressYear();
        const cardFlags = this.service.getCardFlag();

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
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="inputNumber"
                                                name="creditCardNumber"
                                                maxLength={16}
                                                value={this.state.creditCardNumber}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Nome e sobrenome:</label>
                                        <div className="col-lg-8">
                                            <input 
                                                className="form-control" 
                                                type="text" 
                                                name="cardHolder" 
                                                value={this.state.cardHolder}
                                                onChange={this.handleChange}
                                                />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Mês de vencimento:</label>
                                        <div className="col-lg-2">
                                            <SelectMenu
                                                className="form-control"
                                                id="inputMonth"
                                                lista={month}
                                                name="expirationDateMonth"
                                                value={this.state.expirationDateMonth}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Ano de vencimento:</label>
                                        <div className="col-lg-2">
                                            <SelectMenu
                                                className="form-control"
                                                id="inputMonth"
                                                lista={year}
                                                name="expirationDateYear"
                                                value={this.state.expirationDateYear}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Preferencial?:</label>
                                        <div className="col-lg-8">
                                            <input
                                                type="checkbox"
                                                id="cardPreferencial"
                                                name="cardPreferencial"
                                                value={this.state.cardPreferencial}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Código de segurança:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="text" id="inputCodigo"
                                                maxLength="3"
                                                name="cardSecurity" minLength="3"
                                                value={this.state.cardSecurity}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">CPF do titular do cartão:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="inputCPF"
                                                name="cardHolderCpf"
                                                value={this.state.cardHolderCpf}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Bandeira: </label>
                                        <div className="col-lg-8">
                                            <SelectMenu
                                                className="form-control"
                                                id="inputMonth"
                                                lista={cardFlags}
                                                name="cardFlag"
                                                value={this.state.cardFlag}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-8">
                                            <button onClick={this.saveCard} type="button" className="btn btn-primary">Cadastrar</button>
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