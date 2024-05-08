import { convertDate } from "./convertDate";

export const settingChartData = (setChartdata, pricesArray) => {
    if (!Array.isArray(pricesArray)) {
      console.error('Invalid prices data format. Expected an array.');
      return;
    }
  
    setChartdata({
        labels: pricesArray.map(pair => convertDate(pair[0])), // Timestamps
        datasets: [{
            data: pricesArray.map(pair => pair[1]), // Prices
            borderColor: '#3a80e9',
            borderWidth : 1 ,
            fill: true ,
            tension: .25 ,
            backgroundColor: 'rgba(58,128,233,0.1)',
            yAxisID: 'y',
        }]
    });
  };
  