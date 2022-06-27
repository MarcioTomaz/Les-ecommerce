
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

    // console.log("PROPS LINE CHART DATA: ", props.data)
    // console.log("LABEL: ", props.labels)
    console.log("PROPS LINE CHART: ", props)

    const colors = ["#7FFFD4","#000000","#0000FF","#8A2BE2",
    "#7FFF00",
    "#00FFFF",
    "#00008B",
    "#FF00FF",
    "#FFD700",
    "#808080",
    "#00FF00",
    "#ADFF2F",
    "#4B0082",
    "#FF4500",
    "#800080",
    "#FF0000",
    "#4569E1",
    "#FFFF00",
    "#80000",
    "#FF1493",
    "#8B008B",
    "#D2691E",
    "#556B2F",
    "#00FF0",
    "#00FA9A",
    "#2F4F4F"]

    console.log(colors.length, "COLORS")

    let dataSetsProps = []

    //lista de datas filtradas sem repetir     
    let datas = props.labels.filter(function (el, i) {
        return props.labels.indexOf(el) === i;
    });

    let cardNames = []

    //for para setar o DATA do gráfico
    for (let i = 0; i < props.lengthcards; i++) {
     
        if (cardNames.indexOf(props.cardName[i].name) == -1) {
            // filtrar pelo nome da carta
            let vendas = props.cardName.filter(x => x.name === props.cardName[i].name)

            let datasVendas = []

            for (let y in datas) {
                //pra cada data de venda ele vai buscar a quantidade de venda daquele dia
                let vendasDoDia = vendas.filter(x => x.dataVenda == datas[y])

                datasVendas.push(vendasDoDia.length > 0 ? vendasDoDia[0].cardsQuantity : 0)
            }
            
            cardNames.push(props.cardName[i].name)

            //gerar numero aleatorio da cor
            let indexCorAleatoria = Math.floor((Math.random() * colors.length) + 1);

            // criando o objeto para passar pro chartJS 
            dataSetsProps.push({ label: props.cardName[i].name, data: datasVendas, borderColor : colors[indexCorAleatoria] })
        }
    }

    console.log('dataSetsProps', dataSetsProps)    

    var data = {
        labels: datas,
        datasets: dataSetsProps,
        backgroundColor:[]
            
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