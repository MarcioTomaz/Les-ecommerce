
import React from "react";
import { withRouter } from "react-router-dom";
import CardComponent from "./userComponent/cardComponent";

class CreditCardList extends React.Component {

    render() {
        return (
            <>
                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Cartões cadastrados</h1>
                    <hr />
                        <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a>

                        <CardComponent />
                        <CardComponent />
                        <CardComponent />

                        <a href="#/meusDados" className="btn btn-secondary " >Voltar</a>
                </section>
            </>
        )
    }
}

export default withRouter(CreditCardList);