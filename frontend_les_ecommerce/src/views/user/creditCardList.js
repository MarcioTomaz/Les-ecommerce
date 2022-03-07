
import React from "react";
import { withRouter } from "react-router-dom";
import CardComponent from "./userComponent/cardComponent";
import CreditCardRegisterService from "../../service/creditCardRegisterService";
import LocalStorageService from "../../service/localStorageService";
import { errorMessage, successMessage } from "../../components/toastr";

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

    deleteCard = () =>{
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        console.log("to no delete card")

        this.service.deleteId(usuarioLogado.id)
            .then( response => {

                console.log(response.data);

                let qtdMsg = response.data.msg.length;

                if( qtdMsg === 0 ){
                    
                    console.log(qtdMsg);

                    console.log("Deletou");

                    successMessage("Cartao deletado com sucesso! ");

                    this.props.history.push('/meusDados');

                }else{

                    for( let i = 0; i < qtdMsg; i++){
                        errorMessage(response.data.msg[i])
                    }
                }

            }).catch( error =>{})
    }

    componentDidMount(){
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');

        console.log('USuario ID', usuarioLogado.id);
        
        this.service.getCreditCardDetails(usuarioLogado.id)
            .then( response => {     
                
                const responseData = response.data;

                let creditCard = responseData.creditCardNumber;
                console.log(creditCard);
                let creditCardLast4 = creditCard.substr(-4);
                console.log(creditCardLast4)

                this.setState({
                    creditCardNumber: creditCardLast4,
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
                                    <p className="card-text"><strong>Ultimos 4 digitos:</strong> {this.state.creditCardNumber.substring(-4)}</p>
                                    <p className="card-text"><strong>Bandeira:</strong> {this.state.cardFlag}</p>
                                </div>
                                <div className="col-lg-5">
                                <button onClick={this.deleteCard} type="button" className="btn btn-danger mt-3">Excluir</button>
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