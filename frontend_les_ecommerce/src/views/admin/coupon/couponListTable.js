/* eslint-disable import/no-anonymous-default-export */


import React from "react";


export default props => {
    
    const rows = props.couponList.map( (couponList, index) =>{

        return(
            <tr key={index}>
                
                <td>{couponList.code}</td>
                <td>{couponList.amount}</td>                
                <td>{couponList.value}</td>                
                <td>
{/* 
                <button type="button" 
                            className="btn btn-success"
                            onClick={e => props.editAction(creditCards.id)}>Editar</button> */}
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={e =>  props.deleteCoupon(couponList.id)}>Deletar
                    </button>
                </td>
            </tr>

        )
    })


    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Código: </th>
                    <th scope="col">Quantidade: </th>
                    <th scope="col">Valor: </th>
                </tr>
            </thead>
            
            <tbody>
                {rows}
            </tbody>

        </table>
    )
}