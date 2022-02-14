
import React from "react";
import axios from "axios";


class App extends React.Component {
  
  state = {
    teste: ''
  }

  componentDidMount(){
    axios.get("http://localhost:8080/api/teste")
    .then(response => {
      this.setState({teste: response.data })
      console.log(response)
    }).catch(error =>{
      
    })
  }

 render(){
   return(
     <>
      <h1>{this.state.teste}</h1>
      <h3>TESTE</h3>
     </>
   )
 }
}

export default App;
