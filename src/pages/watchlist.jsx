import React, { useEffect, useState } from "react";
import Header from '../components/common/header'
import { getHundredCoin } from "../functions/getHundredCoin";
import TabsComponent from "../components/Dashboard/tabs";
import Button from "../components/common/button";
function Watchlist() {
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [coin, setCoins] = useState([]);
  
    useEffect(() => {
      if (watchlist) {
        getData();
      }
    }, []);
  
    const getData = async () => {
      const allCoins = await getHundredCoin();
      if (allCoins) {
        setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
      }
    };
  
    return (
      <div>
        <Header />
        {watchlist?.length > 0 ? (
          <TabsComponent coins={coin} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Sorry, No Items In The Watchlist.
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
              }}
            >
              <a href="/dashboard">
                <Button text="Dashboard" />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Watchlist;