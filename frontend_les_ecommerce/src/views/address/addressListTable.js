



import React from "react";
import addressList from "./addressList";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.addressList.map( (addressList, index) =>{
        
        return (
            <tr key={index}>

                <td>{addressList.logradouro}</td>
                <td>{addressList.number}</td>
                <td>{addressList.zipCode}</td>
                <td>{addressList.district}</td>
                <td>{addressList.city}</td>

                <td>
                    
                    <button 
                        type="button" 
                        className="btn btn-warning mx-3" 
                        onClick={e =>  props.editAddress(addressList.id)}>Editar
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={e =>  props.deleteAddress(addressList.id)}>Deletar
                    </button>

                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Logradouro: </th>
                    <th scope="col">Número: </th>
                    <th scope="col">CEP: </th>
                    <th scope="col">Distrito: </th>
                    <th scope="col">Cidade: </th>
                </tr>

            </thead>

            <tbody>
                {rows}
            </tbody>
        </table>
    )
}