
import React from "react";
import { withRouter } from "react-router-dom";
import CardComponent from "./userComponent/cardComponent";
import CreditCardRegisterService from "../../service/creditCardRegisterService";
import LocalStorageService from "../../service/localStorageService";
import { errorMessage, successMessage } from "../../components/toastr";
import CrediCardListTable from "../address/crediCardListTable";

class CreditCardList extends React.Component {


    state = {
        creditCardNumber:'',
        cardFlag:'',
        id:'',
        client: null,
        creditCards: []
    }

    constructor(){
        super();
        this.service = new CreditCardRegisterService();
    }

    deleteCard = (creditCardId) =>{
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado');
        console.log("to no delete card")

        this.service.deleteId(creditCardId)
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

        console.log('Cliente ID', usuarioLogado.id);
        
        this.service.getCreditCardDetails(usuarioLogado.id)
            .then( response => {     
                
                const responseData = response.data;

                // console.log(responseData);

                // let creditCard = responseData.creditCardNumber;
                // console.log(creditCard);
                // let creditCardLast4 = creditCard.substr(-4);
                // console.log(creditCardLast4)

                this.setState({
                    // creditCardNumber: creditCardLast4,
                    // cardFlag: responseData.cardFlag
                    creditCards: response.data
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
                        <CrediCardListTable 
                            creditCards={this.state.creditCards} 
                            deleteCard={this.deleteCard} />
                    </div>

                    <a href="#/meusDados" className="btn btn-secondary " >Voltar</a>
                </section>
            </>
        )
    }
}

export default withRouter(CreditCardList);