
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class ClientManagement extends React.Component {

    render() {
        return (
            <>
                <section className=" mb-5 my-5">
                    <form className="container mt-5 mb-5" fragment="seusDados">

                        <div className="card px-5 py-5">

                            <h6 className="text-center">Bem-vindo à sua conta. Aqui você pode gerenciar todos os seus dados pessoais e pedidos.</h6>
                            <div className="row">

                                <hr className="mt-3"/>

                                <div className="card border-0 col-6 my-3 px-5 py-5 " style={{width: '600px'}}>

                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/perfilDetalhes">Sua Conta</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/listaEndereco">Endereços</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/cartoes">Cartões</a>
                                    
                                </div>
                                

                                <div className="card border-0 col-6 my-3 px-5 py-5" style={{width: '600px'}}>

                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/listaPedidos">Meus Pedidos</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/listaCupom">Cupons</a>

                                </div>

                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }

}

export default withRouter(ClientManagement)