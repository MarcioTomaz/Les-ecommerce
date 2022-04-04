

import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.clientList.map( ( clientList, index ) =>{
        return (
            <tr key={index}>
                <td>{clientList.id}</td>
                <td>{clientList.name}</td>
                <td>{clientList.email}</td>
                <td>{clientList.areaCode}</td>
                <td>{clientList.phoneNumber}</td>                
                <td>{clientList.deleted? 'Inativo': 'Ativo'}</td>

                <td>
                    <button 
                        type="button"
                        className="btn btn-danger"
                        onClick={e => props.disableClient(clientList.id)}>
                           {clientList.deleted? 'Ativar': 'Inativar'} 
                    </button>                        
                </td>

            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID: </th>
                    <th scope="col">Nome: </th>
                    <th scope="col">Email: </th>
                    <th scope="col">DDD: </th>
                    <th scope="col">Telefone: </th>
                    <th scope="col">Status: </th>
                </tr>
            </thead>
            
            <tbody>
                {rows}
            </tbody>

        </table>
    )

}