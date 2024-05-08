import axios from "axios";

export const getHundredCoin =()=>{
    let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";
  const myCoins= axios
    .get(url)
    .then((response) => {
      return response.data;   })
    .catch((error) => {

      console.error('Error fetching data:', error);
    });
     return myCoins;
}