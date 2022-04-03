
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class AdmintManagement extends React.Component {

    render() {
        return (
            <>
                <section className=" mb-5 my-5">
                    <form className="container mt-5 mb-5" fragment="seusDados">

                        <div className="card px-5 py-5">

                            <h6 className="text-center">Menu principal administrador.</h6>
                            <div className="row">

                                <div className="card border-0 col-6 my-3 px-5 py-5 " style={{width: '18rem'}}>

                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/listaCliente">Listagem de clientes</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/">Pedidos</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/">Cupons</a>
                                    
                                    
                                </div>

                                <div className="card border-0 col-6 my-3 px-5 py-5" style={{width: '18rem'}}>

                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/">Estoque</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/">Cadastrar Produto</a>
                                    <a className="btn btn-outline-dark list-group-item mx-2 my-2 border border-dark" href="#/">Listar Produtos</a>

                                </div>

                            </div>
                        </div>
                    </form>
                </section>
            </>
        )
    }

}

export default withRouter(AdmintManagement)