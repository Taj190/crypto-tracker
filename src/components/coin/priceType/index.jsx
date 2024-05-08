import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import "./style.css"
export default function TogglePriceType({priceType , handlePriceChange}) {
  
  return (
    <div className='toggle-class' >
    <ToggleButtonGroup
    sx={{
        height:'2.5rem',
        color : "var(--blue)",
        "&.Mui-selected":{
          borderColor:"var(--blue)",
        },
        
          borderColor: "var(--blue) !important",
          border:"unset !important",
          "& .MuiToggleButtonGroup-grouped":{
            borderColor: "unset",
            border:"1px solid !important",
            color : "var(--blue) !important",
          },
          "& .MuiToggleButton-standard":{
            color : "var(--blue)",
          },
       
        
      }}

      value={priceType}
      exclusive
      onChange={handlePriceChange}
      aria-label="text alignment"
    >
      <ToggleButton value="prices" className='toggle-btn' >Price</ToggleButton>
      <ToggleButton value="market_caps"className='toggle-btn' >Market Cap</ToggleButton>
      <ToggleButton value="total_volumes"className='toggle-btn' >Total Volume</ToggleButton>
    
    </ToggleButtonGroup>
    </div>
  )
}

/*   sx={{
        height:'2.5rem',
        color : "var(--white)!important",
        "&.MuiOutlinedInput-notchedOutline":{
          borderColor:"var(--white)!important",
        },
        "& .MuiSvgIcon-root":{
          color: "var(--white)!important",
        },
        "& .MuiSvgIcon-root":{
          color:"var(--white)!important",
        },
        "&:hover":{
          "&& fieldset":{
            borderColor:"#3a80e9",
          },
        },
      }} */