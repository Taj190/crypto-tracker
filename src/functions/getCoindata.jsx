import axios from "axios";

export const getCoindata = (id)=>{

    const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data    
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
    return myData ;
}