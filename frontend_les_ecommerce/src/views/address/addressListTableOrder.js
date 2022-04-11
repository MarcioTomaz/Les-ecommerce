



import React from "react";
import addressList from "./addressList";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.addressList.map( (addressList, index) =>{
        
        return (
            <tr key={index}>

                <td>{addressList.id}</td>
                <td>{addressList.logradouro}</td>
                <td>{addressList.number}</td>
                <td>{addressList.zipCode}</td>
                <td>{addressList.district}</td>
                <td>{addressList.city}</td>

                <td>
                    
                    <button 
                        type="button" 
                        className="btn btn-primary mr-3" 
                        onClick={e =>  props.selectBillingAddress(addressList.id)}>Cobrança
                    </button>

                    <button 
                        type="button" 
                        className="btn btn-info" 
                        onClick={e =>  props.selectDeliveryAddress(addressList.id)}>Entrega
                    </button>

                </td>
            </tr>
        )
    } )

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id: </th>
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