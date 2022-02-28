

import React from "react";
import { withRouter } from "react-router-dom";


function CardComponent() {

    return (
        <>
            <div className="container">

                <div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-5">
                            <p className="card-text"><strong>Ultimos 4 digitos:</strong> 1234</p>
                            <p className="card-text"><strong>Bandeira:</strong> Bandeira</p>
                        </div>
                        <div className="col-lg-5">
                            <button className="btn btn-danger float-right" data-toggle="modal" data-target="#modalExcluirCartao" >Excluir</button>
                        </div>
                        <hr />
                    </div>
                </div>
                <hr />
            </div>
        </>
    )

}

export default CardComponent;