
import React from "react";
import { withRouter } from "react-router-dom";
import { successMessage } from "../../../components/toastr";
import CouponService from "../../../service/Admin/couponService";


class NewCoupon extends React.Component{

    state = {

        code:'',
        amount:'',
        value:'',

    }

    constructor(){
        super();
        this.service = new CouponService();
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    saveCoupon = () => {

        const { code, amount, value} = this.state;
        
        const coupon = { code, amount, value }

        this.service.saveCoupon( coupon )
            .then( response => {

                successMessage("Cupom criado com sucesso!");

                this.props.history.push('/listaAdminCupom')
            })

    }


    render(){
        return(

            <>
             <section className="card px-5 py-5 mx-5 my-5">
                    <div fragment="adicionarCartoes" className="container">
                        <h1 className="mt-4 mb-3">Cadastrar novo cupom de desconto</h1>
                        <hr />
                        <div className="row">

                        </div>
                        <div className="row">
                            <div className="col-md-9 personal-info">
                                <form className="form-horizontal" action="/meusDados">
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Codigo do Cupom:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control"
                                                type="text"
                                                id="code"
                                                name="code"
                                                maxLength={16}
                                                value={this.state.code}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Quantidade de cupons</label>
                                        <div className="col-lg-8">
                                            <input 
                                                className="form-control" 
                                                type="number" 
                                                name="amount" 
                                                value={this.state.amount}
                                                onChange={this.handleChange}
                                                />
                                        </div>
                                    </div>
                                  
                                    <div className="form-group">
                                        <label className="col-lg-3 control-label">Valor de desconto:</label>
                                        <div className="col-lg-8">
                                            <input
                                                className="form-control" 
                                                type="number"
                                                id="value"
                                                name="value"
                                                value={this.state.value}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>  

                                       <div className="form-group">
                                        <label className="col-md-3 control-label"></label>
                                        <div className="col-md-8">
                                            <button onClick={this.saveCoupon} type="button" className="btn btn-primary">Cadastrar</button>
                                            <span></span>
                                            <a href="#/administracao" className="btn btn-secondary">Cancelar</a>

                                        </div>
                                    </div>                              
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>
            </>
        )
    }
}

export default withRouter(NewCoupon);
