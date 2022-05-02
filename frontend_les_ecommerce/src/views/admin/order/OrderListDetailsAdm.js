

/* eslint-disable import/no-anonymous-default-export */


import React from "react";

export default props => {
    const rows = props.productsListOrder.map( ( productsListOrder, index ) => {        
        return(
            <div key={index}>
                <div className="row">
                    
                    <div className="col-12 ">
                        <hr/>
                        <p className="card-text"><strong>Produto:</strong> {productsListOrder.product.name} </p>
                        <p className="card-text"><strong>Valor unitario:</strong> R$ {productsListOrder.product.price} </p>
                        <p className="card-text" >
                            <strong>Quantidade:</strong> {productsListOrder.quantity}
                        </p>
                    </div>               
                </div>
            </div>            
        )
    } )

    return (
        <>
            {rows}
        </>

    )

}