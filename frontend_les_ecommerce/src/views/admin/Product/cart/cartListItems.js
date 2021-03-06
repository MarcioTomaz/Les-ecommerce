/* eslint-disable import/no-anonymous-default-export */


import React from "react";
import productList from "../productList";


export default props => {

    console.log(props)
    const rows = props.cartList.map( ( cartList, index ) => {

        console.log('CartListItem', cartList)        
        
        return (
           
            <div key={index} className="container">

                <h1 className="mt-4 mb-3">Item</h1>

                <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="row">
                        <div className="col-lg-12 mb-4">
                            <div className="card h-100">
                            <div className="card-body">
                                <div className="col-md-2 float-left">                                                        
                                </div>
                                
                                <div className="col-lg-7 float-left">
                                <p className="card-text"><strong>Produto:</strong> {cartList.product.name} </p>
                                
                                <p className="card-text"><strong>Valor total:</strong> R${cartList.product.price * cartList.quantity}</p>
                                <p className="card-text"><strong>Quantidade disponível:</strong> {cartList.product.stock}</p>
                                <p className="card-text"><strong>Quantidade:</strong> {cartList.quantity} </p>


                                {/* <p className="card-text"><strong>Quantidade:</strong>
                                    <input 
                                        className="form-control"
                                        type="number" 
                                        value={cartList.quantity}
                                        onClick={e => props.plusCartItem(cartList.quantity)}
                                    />
                                </p> */}
                                                                
                                <div className="row">
                                    <div className="col-lg-1 col-md-2 btn">                                
                                    
                                    </div>
                                    <div className="col-lg-1 col-md-2 btn">
                                    
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-3 float-left">
                                <button 
                                    className="btn btn-danger float-right"
                                    onClick={e => props.removeCart(cartList.id)}
                                    >Remover do carrinho</button>

                                {/* <button 
                                    type="button" 
                                    className="btn btn-danger ml-5" 
                                    onClick={e =>  props.removeItemCart(cartList.id)}>
                                        
                                </button>   */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                      
                        <hr/>    
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