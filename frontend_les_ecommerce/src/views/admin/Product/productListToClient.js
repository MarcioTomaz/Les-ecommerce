/* eslint-disable jsx-a11y/no-redundant-roles */

/* eslint-disable import/no-anonymous-default-export */

import React from "react";

export default props => {

    const rows = props.productList.map( ( productList, index ) => {
        console.log('AAAAAAAAAAAAAA', productList)        
        return (

           
                <div key={index} className="">
                    <div className="mx-5 my-5">
                        <div className="card">                            

                        <div className="block-img py-3 px-3">
                        <img className="img-fluid rounded mb-4" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Yugioh_Card_Back.jpg/250px-Yugioh_Card_Back.jpg" alt="" />
                        </div>
                        <div className="row">
                          
                            </div>
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
                                    target="new"
                                    onClick={ e => props.getProductDetails(productList.id)}
                                    >Ver Oferta
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
     
        )
    } )

    return (
        <>
            {rows}
        </>

    )


}