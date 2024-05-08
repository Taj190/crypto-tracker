import { MenuItem, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getHundredCoin } from '../../../../functions/getHundredCoin'
import './style.css'
function SelectCoin({coin1,coin2 , handleCoinChange}) {
   
    const[coins,setCoins]=useState([])
    const style={
        height:'2.5rem',
        color : "var(--color-white)",
        "&.MuiOutlinedInput-notchedOutline":{
          borderColor:"var(--color-white)",
        },
        "& .MuiSvgIcon-root":{
          color: "var(--color-white)",
        },
        "& .MuiSvgIcon-root":{
          color:"var(--color-white)",
        },
        "&:hover":{
          "&& fieldset":{
            borderColor:"#3a80e9",
          },
        },
      }
      useEffect(()=>{
        getData()
      },[])
      async function getData (){
       const data = await getHundredCoin()
       setCoins(data)
      }
  return (
    <div className='coin-flex'>
      <p>Coin-1</p>
        <Select
        sx={style}
          label="Days"
          value={coin1}
          onChange={(event)=>handleCoinChange(event, false)}
        >
          {coins
          .filter((coin)=>coin.id!== coin2)
          .map((coin , i)=><MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
          <MenuItem value={1}>1 Days</MenuItem>
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={360}>1 Year</MenuItem>
        </Select>

        <p>Coin-2</p>
        <Select
        sx={style}
          label="Days"
          value={coin2}
          onChange={(event)=>handleCoinChange(event, true)}
         
        >
          {coins
          .filter((coin)=>coin.id!== coin1)
          .map((coin , i)=><MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
          <MenuItem value={1}>1 Days</MenuItem>
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>1 Month</MenuItem>
          <MenuItem value={180}>6 Months</MenuItem>
          <MenuItem value={360}>1 Year</MenuItem>
        </Select>
    </div>
  )
}

export default SelectCoin