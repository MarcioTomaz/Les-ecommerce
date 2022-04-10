

import React from "react";
import { withRouter } from "react-router-dom";

import couponListTable from "./couponListTable";

import CouponService from "../../../service/Admin/couponService";
import CouponListTable from "./couponListTable";
import { successMessage } from "../../../components/toastr";

class CouponAdminList extends React.Component{

    state = {
        couponList: [],
    }

    constructor(){
        super();
        this.service = new CouponService();
    }

    componentDidMount(){

        this.service.getAllCoupons()
            .then( response => {
                const responseData = response.data;

                console.log(responseData)

                this.setState({
                    couponList: response.data
                })
                
            })
    }

    deleteCoupon = (couponId) =>{

        this.service.deleteId(couponId)
            .then( response => {
                successMessage("Cupom Deletado com sucesso!");
            })
    }

    render(){
        return(
            <>

                <section className=" card px-5 py-5 mx-5 my-5">

                    <h1 className="mt-4 mb-3 text-center">Cupons cadastrados</h1>
                    <hr />
                    <a href="#/novoCupom" className="btn btn-secondary" >Adicionar novo cupom</a>

                    {/* <CardComponent />                    */}

                    <div className="container">
                        <CouponListTable 
                            couponList={this.state.couponList} 
                            deleteCoupon={this.deleteCoupon} />
                    </div>

                <a href="#/administracao" className="btn btn-secondary " >Voltar</a>
                </section>            

            </>
        )
    }


}

export default withRouter(CouponAdminList);