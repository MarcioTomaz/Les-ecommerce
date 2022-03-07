
import React from "react";
import { withRouter } from "react-router-dom";
import CardComponent from "./userComponent/cardComponent";
import CreditCardRegisterService from "../../service/creditCardRegisterService";
import LocalStorageService from "../../service/localStorageService";

class CreditCardList extends React.Component {


    state = {
        creditCardNumber:'',
        cardFlag:'',
        client: null
    }

    constructor(){
        super();
        this.service = new CreditCardRegisterService();
    }

    componentDidMount(){
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        console.log('USuario ID', usuarioLogado.id);
        
        this.service.getCreditCardDetails(usuarioLogado.id)
            .then( response => {                

                console.log('RESPONSE', response.data)

                const responseData = response.data;

                this.setState({
                    creditCardNumber: responseData.creditCardNumber,
                    cardFlag: responseData.cardFlag
                })
            })

    }

    render() {
        return (
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Cartões cadastrados</h1>
                    <hr />
                    <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>

                    {/* <CardComponent />                    */}

                    <div className="container">

                        <div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-5">
                                    <p className="card-text"><strong>Ultimos 4 digitos:</strong> {this.state.creditCardNumber}</p>
                                    <p className="card-text"><strong>Bandeira:</strong> {this.state.cardFlag}</p>
                                </div>
                                <div className="col-lg-5">
                                    <button className="btn btn-danger float-right" data-toggle="modal" data-target="#modalExcluirCartao" >Excluir</button>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <hr />
                    </div>

                    <a href="#/meusDados" className="btn btn-secondary " >Voltar</a>
                </section>
            </>
        )
    }
}

export default withRouter(CreditCardList);