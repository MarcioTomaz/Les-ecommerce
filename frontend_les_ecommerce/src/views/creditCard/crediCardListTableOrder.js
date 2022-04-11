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
                    
                    <button 
                        type="button" 
                        className="btn btn-success btn-check" 
                        onClick={e =>  props.selectCard(creditCards.id)}>Selecionar cartão
                    </button>

                    {/* <input type="checkbox" className="btn-check" id="btn-check-outlined" autocomplete="off" />
                    <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Single toggle</label><br></br> */}
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