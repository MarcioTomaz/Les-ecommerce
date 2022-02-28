

import React from "react";

function couponComponent() {
    return (
        <>
            <div className="row" >
                <div className="col-lg-12 col-md-8 mx-auto">
                    <div className="card rounded shadow shadow-sm">
                        <div className="card-body">
                            <p><strong>Nº do Cupom:</strong>  cupom codigo</p>
                            <p><strong>Data de geração:</strong> cupom dataCriacao | date: 'dd/MM/yyyy'</p>
                            <p><strong>Valor:</strong> valor </p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <p><strong>Status:</strong> </p>
                                </div>
                                <div className="col-lg-2">
                                    <div>
                                        <p className="btn-sm btn-success text-center"> cupom status</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default couponComponent;