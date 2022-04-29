

/* eslint-disable import/no-anonymous-default-export */


import React from "react";

export default props => {
    const rows = props.exchangeListOrder.map( ( exchangeListOrder, index ) => {        
        return(
            <div key={index}>
                <div className="row">
                    
                    <div className="col-12 ">
                        <hr/>
                        <div className="row">
                            
                            <div className="col-8">
                                <p className="card-text"><strong>Produto:</strong> {exchangeListOrder.product.name} </p>
                                <p className="card-text"><strong>Valor unitario:</strong> R$ {exchangeListOrder.product.price} </p>
                                <p className="card-text" >
                                    <strong>Quantidade:</strong> {exchangeListOrder.quantity}
                                </p>                            
                            </div>

                            <div className="col-4 form-check">
                                <input 
                                    type="checkbox" 
                                    className="form-check-input"
                                    onClick={ e => props.selectItems(exchangeListOrder.id)}                                   
                                    />
                                {/* <button 
                                    type="button" 
                                    className="btn btn-info" 
                                    onClick={e =>  props.selectTypeAddress(exchangeListOrder.id)}>Selecionar
                                </button> */}
                            </div>

                        </div>                       
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