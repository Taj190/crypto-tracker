import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/header';
import Loader from '../components/common/loader';
import { coinObject } from '../functions/convertObject';
import List from '../components/Dashboard/list';
import CoinInfo from '../components/coin/coinInfo';
import { getCoindata } from '../functions/getCoindata';
import { getCoinPrices } from '../functions/getCoinprices';
import LineChart from '../components/coin/lineChart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/coin/selectdays';
import { settingChartData } from '../functions/settingChartdata';
import PriceType from '../components/coin/priceType';

function CoinPage() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [coinData, setCoinData] = useState(null);
    const [days , setdays]=useState(7)
    const [chartData , setChartdata] = useState({})
    const [priceType, setpriceType] = useState('prices');
 
    useEffect(() => {
        if (id) {
         getData ()
        }
    }, [id]);
    async function getData() {
        try {
            const data = await getCoindata(id);
            
            if (!data) {
                console.error('Coin data not found.');
                return;
            }
            
            coinObject(setCoinData, data);
            
            const response = await getCoinPrices(id, days , priceType);
            console.log(response)
            if (!response) {
                console.error('Prices data not found.');
               return
            }
            // Extract prices array from the response
            const pricesArray = response;
            console.log(pricesArray)
            // Now pricesArray is an array of timestamp-price pairs
            // You can use it directly to set your chart data
            
            setChartdata({
                labels: pricesArray.map(pair => convertDate(pair[0])), // Timestamps
                datasets: [{
                    data: pricesArray.map(pair => pair[1]), // Prices
                    borderColor: '#3a80e9',
                    borderWidth : 1 ,
                    fill: true ,
                    tension: .25 ,
                    backgroundColor: 'rgba(58,128,233,0.1)',
                    yAxisID: 'y',
                }]
            });
            
            setLoading(false);
        } catch (error) {
            console.error('Error fetching or processing data:', error);
            setLoading(false);
        }
    }
    

    const DayhandleChange = async (event) => {
        setdays(event.target.value);
        setLoading(true);
      
        try {
          const response = await getCoinPrices(id, days,priceType);
          
          if (!response || !Array.isArray(response)) {
            console.error('Invalid prices data format. Expected an array.');
            return;
          }
      
          console.log('Prices data:', response);
          settingChartData(setChartdata, response);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching or processing data:', error);
          setLoading(false);
        }
      };

      const handlePriceChange = async (event, newType) => {
        setpriceType(newType);
        setLoading(true);
        try {
            const response = await getCoinPrices(id, days,newType);
            console.log(response)
            if (!response || !Array.isArray(response)) {
              console.error('Invalid prices data format. Expected an array.');
              return;
            }
            console.log('Prices data:', response);
            settingChartData(setChartdata, response);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching or processing data:', error);
            setLoading(false);
          }
      };

    return (
        <div>
            <Header />
            {isLoading ? (<Loader />) : (
                <>
                <div className='wrapper'>
                <List coin={coinData} /></div>
                <div className='wrapper'>
                <SelectDays days={days} DayhandleChange={DayhandleChange}/>
                <PriceType priceType={priceType} handlePriceChange={handlePriceChange} />
                <LineChart chartData={chartData} priceType={priceType} />
                </div>
                <CoinInfo name={coinData.name} desc={coinData.desc}/>
                </>
            )}
               
                
            </div>
    );
}

export default CoinPage;
