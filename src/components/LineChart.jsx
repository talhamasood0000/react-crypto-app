import React from 'react'
import { Line } from 'react-chartjs-2'
import { Typography, Row, Col } from 'antd'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  )
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for(let i=0; i< coinHistory?.data?.history?.length; i+=1){
        coinPrice.push(coinHistory?.data?.history[i].price)
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }
    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

  return (
    <>
        <Row className='chart-header'>
            <Title className='chart-title' level={2}>{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title className='price-change' level={5}>{coinHistory?.data?.change}%</Title>
                <Title className='current-price' level={5}>{coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options} />
    </>
  )
}

export default LineChart