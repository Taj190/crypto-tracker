import React, { useState } from 'react'
import './style.css'
function CoinInfo({name , desc}) {
    const shortDesc = desc.slice(0 ,200) + "<span style='color:var(--color-grey)'> Read More...</span>" ;
    const largeDesc = desc + "<span style='color:var(--color-grey)'> Read Less</span>" ;
    const[flag , setflag] = useState(false)
    return (
    <div className='wrapper'>
        <h2>{name}</h2>
        {
            desc.length > 200 ? <p
            onClick={()=>setflag(!flag)}
            className='description' dangerouslySetInnerHTML={{__html : !flag ? shortDesc : largeDesc}} ></p> :
            <p>{desc}</p> 
        }
    </div>
  )
}

export default CoinInfo