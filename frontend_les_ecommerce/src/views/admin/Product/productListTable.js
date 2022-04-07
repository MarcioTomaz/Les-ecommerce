
/* eslint-disable import/no-anonymous-default-export */

import React from "react";

export default props => {

    const rows = props.productList.map( ( productList, index ) => {
        console.log('BBBBBBBBBBBBBBBBBBBBB', productList)
        return (
            
            <tr className="text-center">
                <td>{productList.id}</td>
                
                <td>{productList.name}</td>
                <td>{productList.price}</td>
                <td>{productList.stock}</td>
                <td>{productList.deleted? 'Inativo': 'Ativo'}</td>
                <td>{productList.cardRarity}</td>
                <td>{productList.cardType}</td>
                {/* <td>{productList.productDescription}</td> */}
                
                <td>

                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={e => props.editAction(productList.id)}>Editar</button>

                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-5" 
                        onClick={e =>  props.changeActive(productList.id)}>
                            {productList.deleted? 'Ativar': 'Inativar'}
                    </button>          
                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
        <thead>
            <tr className="text-center">
                <th scope="col">ID: </th>
                <th scope="col">Nome produto: </th>
                <th scope="col">Preço: </th>
                <th scope="col">Estoque: </th>
                <th scope="col">Status: </th>
                <th scope="col">Raridade: </th>
                <th scope="col">Tipo: </th>
                <th scope="col">Editar: </th>
                <th scope="col">Ativar: </th>
            </tr>
        </thead>
        
        <tbody>
            {rows}
        </tbody>

    </table>
    )

}