/* eslint-disable jsx-a11y/no-redundant-roles */

/* eslint-disable import/no-anonymous-default-export */

import React from "react";

export default props => {

    const rows = props.productList.map( ( productList, index ) => {
        console.log('AAAAAAAAAAAAAA', productList)
        return (

            <>
                <div className="">
                    <div className="mx-5 my-5">
                        <div className="card">
                            
                            <hr/>
                            <div className="card-body">
                            <div className="mt-0">
                                <h6 className="card-subtitle ">{}</h6>
                            </div>

                            <div>
                                <p className="card-text">{productList.name}</p>
                            </div>
                            <div>
                                <h1 className="badge badge-primary">R$ {productList.price}</h1>
                            </div>
                            <div className="">
                                <button                                           
                                    className="btn btn-sm btn-outline-secondary mb-1" 
                                    role="button"
                                    target="new">Ver Oferta
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-primary mb-1"  
                                    type="button"
                                    onClick={ e => props.addToCart(productList)} 
                                    target="new">Carrinho
                                </button>                              
                                    
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
     
        )
    } )

    return (
        <>
            {rows}
        </>

    )


}