

import React from "react";
import { withRouter } from "react-router-dom";
import ClientCouponService from "../../service/client/ClientCouponService";
import LocalStorageService from "../../service/localStorageService";
import CouponComponent from "./userComponent/couponComponent";

class CouponList extends React.Component {


    state = {
        couponList: []
    }

    constructor() {
        super();
        this.couponService = new ClientCouponService();
        // this.editAddress = new EditAddressService();
    }

    componentDidMount() {
        
        const usuarioLogado = LocalStorageService.obterItem('_usuario_logado')
        console.log(usuarioLogado.id)

        this.couponService.listCoupons(usuarioLogado.id)
            .then(response => {
                this.setState({
                    couponList: response.data
                })
            })

    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="mt-4 mb-3">Cupons</h1>
                    <hr />
                    {/* <div className="row">
                        <div className="col-lg-10 offset-1">
                            <div className="col-lg-10 float-left">
                                <input type="text" name="valorBusca" className="htmlForm-control" placeholder="Pesquisar cupom" />
                            </div>
                            <div className="col-lg-2 float-right">
                                <input type="button" className="btn btn-secondary" value="Pesquisar" />
                            </div>
                        </div>
                    </div> */}
                    <hr />
                    <CouponComponent
                        couponList={this.state.couponList}                         
                    />                    
                </div>
            </>
        )
    }
}

export default withRouter(CouponList)