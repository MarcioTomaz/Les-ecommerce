/* eslint-disable import/no-anonymous-default-export */


import React from "react";

export default props => {

    const rows = props.creditCards.map( (creditCards, index) => {
        return (
            <tr key={index}>
                <td>{creditCards.id}</td>
                <td>{creditCards.creditCardNumber}</td>
                <td>{creditCards.cardFlag}</td>                
                <td>
{/* 
                <button type="button" 
                            className="btn btn-success"
                            onClick={e => props.editAction(creditCards.id)}>Editar</button> */}
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={e =>  props.deleteCard(creditCards.id)}>Deletar
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID: </th>
                    <th scope="col">Últimos 4 digitos: </th>
                    <th scope="col">Bandeira: </th>
                </tr>
            </thead>
            
            <tbody>
                {rows}
            </tbody>

        </table>
    )
}