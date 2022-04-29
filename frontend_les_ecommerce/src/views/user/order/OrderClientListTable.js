/* eslint-disable import/no-anonymous-default-export */


import React from "react";


export default props => {

    const rows = props.ordersList.map ( (ordersList, index) =>{

        return (

            <tr key={index} className="text-center">
                <td>{ordersList.id}</td>                
                <td>R$ {ordersList.total}</td>               
         
                <td className={{
                    'EM_PROCESSAMENTO': 'text-info',
                    'EM_TRANSITO': 'text-warning',
                    'ENTREGUE': 'text-success',
                    'RECUSADO': 'text-danger',
                    'EM_TROCA': 'text-info',
                    'TROCA_AUTORIZADA': 'text-success'
                }[ordersList.status]}>
                    {ordersList.status}
                </td>                
{/* 
                <td>
                    <button 
                        type="button"
                        className="btn btn-warning"
                        onClick={e => props.devolution(ordersList.id)}>Devolucão
                    </button>
                </td>     */}

                <td>
                    <button 
                        type="button"
                        className="btn btn-danger"
                        onClick={e => props.exchange(ordersList.id)}>Troca
                    </button>
                </td>

                <td>
                    <button 
                        type="button"
                        className="btn btn-primary"
                        onClick={e => props.details(ordersList.id)}>Detalhes
                    </button>
                </td>
            </tr>
        )

    } )

    return( 

        <table className="table table-hover text-center">
            <thead>
                <tr>
                    <th scope="col">Id da compra: </th>
                    <th scope="col">Valor total: </th>
                    <th scope="col">Status: </th>
                    {/* <th scope="col">Devolucão: </th> */}
                    <th scope="col">Troca: </th>                
                    <th scope="col">Detalhes: </th>                
                </tr>
            </thead>
            
            <tbody>
                {rows}
            </tbody>

        </table>
    )
    
}