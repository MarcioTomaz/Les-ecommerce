

import React from "react";
import { withRouter } from "react-router-dom";

import AddresComponent from "../user/userComponent/addressComponent";

class AddressList extends React.Component {

    render() {
        return (
            <>
            <section className=" card px-5 py-5 mx-5 my-5">

                <h1 className="mt-4 mb-3">Lista - Endereços </h1>
                <hr />
                <a href="#/novoEndereco" className="btn btn-secondary col-md-3" >Adicionar novo endereco</a>

                <hr />

                <AddresComponent />

                <AddresComponent />

                <AddresComponent />

                <a href="#/meusDados" className="btn btn-outline-secondary mb-2" style={{maxWidth: '140px'}}>Voltar</a>

            </section>
                
        </>
        )
    }
}

export default withRouter(AddressList);