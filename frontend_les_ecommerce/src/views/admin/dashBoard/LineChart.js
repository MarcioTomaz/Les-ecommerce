
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChart = (props) => {

    console.log("PROPS LINE CHART DATA: ", props.data)
    console.log("PROPS LINE CHART LABEL: ", props.labels)
    console.log("PROPS LINE CHART: ", props)

    // var meuCarro = new Object();
    // meuCarro.fabricacao = "Ford";
    // meuCarro.modelo = "Mustang";
    // meuCarro.ano = 1969;

    let dataSetsProps = []

    for( let i = 0; i< 12; i++){
        
        dataSetsProps.push ({ label : props.cardName[i], data: props.data[i] })

        console.log("iiiiiiiii", i)
    } 

    console.log('dataSetsProps', dataSetsProps)
    
    var data = {
        labels: props.labels,
        datasets: dataSetsProps,
    }

    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            label: {
                fontFize: 26
            }
        }
    }

    return (
        <div>
            <Line
                data={data}
                height={400}
                options={options}
                />
        </div>
    )
}

export default LineChart