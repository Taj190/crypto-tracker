import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
import TabsComponent from '../components/Dashboard/tabs'
import axios from 'axios'
import SearchBar from '../components/Dashboard/Search'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PaginationControlled from '../components/Dashboard/pagination'
import Loader from '../components/common/loader'
import BacktoTop from '../components/Dashboard/scrollButton'
import { getHundredCoin } from '../functions/getHundredCoin'
function DashBoard() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading , setLoading] = useState(true)
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
   getData()
  }, []);
  const getData =async () => {
  const myCoins = await getHundredCoin();
  setCoin(myCoins);
  setLoading(false)
  }
  function onSearchChange(e) {
    setSearch(e.target.value);
    setPage(1); 
  }

  const filteredCoin = coin.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Paginate the filtered results
  const startIndex = (page - 1) * 10;
  const endIndex = startIndex + 10;
  const paginatedCoin = filteredCoin.slice(startIndex, endIndex);

  return (
    <>
    {isLoading ? <Loader/> : 
    
    <div>
      <Header />
      <BacktoTop />
      <SearchBar search={search} onSearchChange={onSearchChange} />

      {filteredCoin.length === 0 ? (
        <div className="no-result">
          <h1>No results found</h1>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button className="go-back" onClick={() => setSearch('')}>
              Go Back
            </Button>
          </ButtonGroup>
        </div>
      ) : (
        <TabsComponent coin={paginatedCoin} />
      )}
      {/* Only render pagination if search query is empty */}
      {search === '' && <PaginationControlled page={page} handleChange={handleChange} />}
    </div>

    }
    </>
      );
}

export default DashBoard