import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({search , onSearchChange }) {
  return (
    <div className='search-flex'>
      <SearchIcon/>
      <input placeholder='search' type='text' value={search} onChange={onSearchChange} />
    </div>
  )
}

export default SearchBar