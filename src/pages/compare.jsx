import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
import SelectCoin from '../components/common/compare/selectcoin'
import SelectDays from '../components/coin/selectdays'
import { getCoindata } from '../functions/getCoindata'
import { getCoinPrices } from '../functions/getCoinprices'
import { coinObject } from '../functions/convertObject'
import Loader from '../components/common/loader'
import { List } from '@mui/material'
import CoinInfo from '../components/coin/coinInfo'


function ComparePrice() {
  const[coin1,setCoin1]=useState('bitcoin')
  const[coin2,setCoin2]=useState('ethereum')
  const[coindata1,setCoindata1]=useState({})
  const[coindata2,setCoindata2]=useState({})
  const[isLoading,setLoading]=useState(true)
  const[priceType ,setPriceType]=useState('prices')
  const[days , setdays] = useState(30)
  function DayhandleChange (event){
    setdays(event.target.value)
  }
  useEffect(()=>{
    getData()
  },[])

  async function getData(){
    setLoading(true)
    const data1 = await getCoindata(coin1) ;
    const data2 = await getCoindata(coin2) ;
    console.log(data1)
    if(data1){
      coinObject(setCoindata1,data1)
     
  }
  if(data2){
    coinObject(setCoindata2,data2)
    
  }
  if(data1 && data2){
    const prices1 = await getCoinPrices(coin1, days,priceType);
    const prices2 = await getCoinPrices(coin2, days,priceType);
    if(prices1.length>0 && prices2.length>0){
      setLoading(false);
    }
  }
}
  const handleCoinChange= async(e , isCoin2)=>{
    setLoading(true)
    if(isCoin2){
     setCoin2(e.target.value)
     const data = await getCoindata(event.target.value) ;
      coinObject(setCoindata2,data)
}
    else{
     setCoin1(e.target.value)
     const data = await getCoindata(event.target.value) ;
     coinObject(setCoindata2,data)
 }
 

    
}

  return (
   <div >
    <Header/>
    {isLoading ? (<Loader />) : (
      <>
       <div className='coin-flex-price'>
       <SelectCoin coin1={coin1}
        coin2={coin2}
        handleCoinChange={handleCoinChange}
          />
          <SelectDays days={days}DayhandleChange={DayhandleChange} noPtag={true}/>
         </div>
          <div className='wrapper'>
                <List coin={coindata1} />
          </div>

          <div className='wrapper'>
                <List coin={coindata2} />
          </div>
             
          <CoinInfo name={coindata1.name} desc={coindata1.desc}/>
          <CoinInfo name={coindata2.name} desc={coindata2.desc}/>

         
          </>
    ) }
   
   
    </div>
  )
}

export default ComparePrice