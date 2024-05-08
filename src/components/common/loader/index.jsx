import React from 'react'
import './style.css'
import { CircularProgress } from '@mui/material'
function Loader() {
  return (
    <div className='loader'><CircularProgress /> </div>
  )
}

export default Loader