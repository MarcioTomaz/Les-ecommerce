
import React from "react";
import { withRouter } from "react-router-dom";

import ClientService from "../../../service/clientService";
import CrediCardListTable from "../../creditCard/crediCardListTable";
import ClientListTable from "./clientListTable";

import { errorMessage,successMessage } from "../../../components/toastr";


class ClientListAdmin extends React.Component{

    state = {

        name: '',
        email:'',
        areaCode:'',
        phoneNumber:'',
        deleted:'',
        clients: []
    }

    constructor(){
        super();
        this.service = new ClientService();
    }

    getAllClients(){
        this.service.getAllClients()
        .then( response => {

            console.log(response)
            this.setState({
                clients: response.data
            })
        } )   
    }

    componentDidMount(){
        this.getAllClients();
        console.log("TESTE ");   
    }
    
    disableClient = (clientId) =>{

        this.service.disableClientId(clientId)
            .then( response =>{
                console.log(response.data)
                if(response.data.deleted){
                    successMessage("Cliente inativado com sucesso!");
                    
                }else{
                    successMessage("Cliente inativado com sucesso!")
                }   
                
                this.getAllClients();
            })
    }

    render(){
        return(
            <>
                 <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Lista de clientes</h1>
                    <hr />
                    {/* <a href="#/cadastrarCartao" className="btn btn-secondary" >Adicionar novo cartão</a> */}

                    {/* <CardComponent />                    */}

                    <div className="container">
                        <ClientListTable 
                            clientList={this.state.clients} 
                            disableClient={this.disableClient} /> 
                            {/* Arrumar q o campo nao é atualizado ao clicar em ativar, inativar */}
                    </div>

                    <a href="#/administracao" className="btn btn-secondary " >Voltar</a>
                </section>
            </>
        )
    }

}

export default withRouter(ClientListAdmin)