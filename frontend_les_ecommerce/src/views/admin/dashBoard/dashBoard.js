
import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { errorMessage } from "../../../components/toastr";
import DashboardService from "../../../service/Admin/dashboardService";
import ProductService from "../../../service/Admin/productService";
import CardRarity from "./cardRarity";
import LineChart from "./LineChart";


class DashBoard extends React.Component {

    state = {

        data: [50, 19, 3, 5, 2, 3],
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        lengthcards: 0,

        cardName: [],

        // data: [5,1,1],
        // labels: ['Mago Negro', 'Fusao'],
        // data:[],
        // labels:[],
        startDate: '',
        endDate: '',

        rarityList: []

    }

    constructor() {
        super();
        this.service = new ProductService();
        this.dashboardService = new DashboardService();
    }

    componentDidMount() {
        
        // this.dashboardService.getDashboard()
        //     .then( response => {

        //         console.log( "did mount" , response.data )    

        //         // this.setState({
        //         //     data: response.data,
        //         //     labels: response.data                
        //         // })
        //     })
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    filterDashboard = () => {

        if (this.state.startDate === '' || this.state.endDate === '') {
            errorMessage("Insira as duas datas para filtrar")
        } else {    
            
            console.log(this.state.startDate)

            this.dashboardService.getDashboardFilterDate({dtInicio: this.state.startDate, dtFim: this.state.endDate})
            .then( response => {
 
                console.log( 'Respostas',  response.data )

                let listaName = [];
                let listaQuantity = [];
                let orderDate = [];

                for(let x in response.data){
                    
                    listaName.push( { name: response.data[x].cardName, cardsQuantity: response.data[x].cardsQuantity, dataVenda:response.data[x].orderDate })
                    // listaName.push(  response.data[x].cardName)

                    listaQuantity.push( response.data[x].cardsQuantity)

                    orderDate.push(response.data[x].orderDate)
                }

                this.setState({
                    
                    cardName: listaName,
                    data: listaQuantity,
                    labels: orderDate,
                    lengthcards: response.data.length
                })           
            })
        }

    }

    // selectRarity = (cardRarityValue) =>{   
        
    //     console.log(cardRarityValue)
    //     console.log("itemId", this.state.rarityList)

    //     this.setState({
    //         rarityList: [...this.state.rarityList, cardRarityValue]
    //         // idList: this.state.idList.concat(itemId)
    //     })    
    // }

    selectRarity = (id) => {
    }

    render() {

        const rarity = this.service.getRarity2();

        return (
            <>
                <div className="container mx-5 my-5">
                    <div className="row">
                        <div className="col-lg-12 col-sm-6 portfolio-item">
                            <div className="row" >
                                <div className="col-lg-12 personal-info">
                                </div>
                            </div>
                            <div className="card h-100">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="col-lg-4 float-left">
                                                <p>Data de inicio: </p>
                                            </div>
                                            <div className="col-lg-6 float-left">
                                                <input
                                                    className="form-control"
                                                    id="startDate"
                                                    value={this.state.startDate}
                                                    onChange={this.handleChange}
                                                    name="startDate"
                                                    type="date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="col-lg-4 float-left">
                                                <p>Data de fim: </p>
                                            </div>
                                            <div className="col-lg-6 float-left">
                                                <input
                                                    className="form-control"
                                                    id="endDate"
                                                    value={this.state.endDate}
                                                    onChange={this.handleChange}
                                                    name="endDate"
                                                    type="date" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <button
                                                className="btn btn-secondary"
                                                onClick={this.filterDashboard}
                                            >Buscar</button>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 float-left"></div>
                                        </div>
                                    </div>

                                    <LineChart
                                        cardName={this.state.cardName}
                                        data={this.state.data}
                                        labels={this.state.labels}
                                        lengthcards={this.state.lengthcards}
                                    />
                                    {/* 
                                    <CardRarity
                                        lista={rarity}
                                    /> */}

                                    {/* <input type="checkbox"></input> */}

                                    {/* <div className="col-lg-6 float-left">
                                        <label>Comuns</label>
                                        <input
                                            className=""
                                            id="endDate"
                                            value={this.state.rarityList}
                                            onChange={this.selectRarity}
                                            name="comum"
                                            type="checkbox" />
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(DashBoard)