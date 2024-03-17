
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import axios from 'axios';

const Dashboard = () => {
 const { user } = useContext(UserContext);
 const [stockData, setStockData] = useState([]);
 const [metadata, setMetadata] = useState({});

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/stock?symbol=TSCO');
        const data = response.data;
        setMetadata(data['Meta Data']);
        const weeklyTimeSeries = data['Weekly Time Series'];
        const formattedData = Object.keys(weeklyTimeSeries).map(date => ({
          date,
          open: parseFloat(weeklyTimeSeries[date]['1. open']),
          high: parseFloat(weeklyTimeSeries[date]['2. high']),
          low: parseFloat(weeklyTimeSeries[date]['3. low']),
          close: parseFloat(weeklyTimeSeries[date]['4. close']),
          volume: parseFloat(weeklyTimeSeries[date]['5. volume']),
        }));
        setStockData(formattedData);
      } catch (error) {
        console.error('Failed to fetch stock data:', error);
      }
    };
    fetchData();
 }, []);

 return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {!!user && <h2> HI {user.name}! </h2>}
      <button>click me</button>

      <div className="metadata">
        <h2>Metadata</h2>
        <p>Information: {metadata['1. Information']}</p>
        <p>Symbol: {metadata['2. Symbol']}</p>
        <p>Last Refreshed: {metadata['3. Last Refreshed']}</p>
        <p>Time Zone: {metadata['4. Time Zone']}</p>
      </div>

      {stockData && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.open}</td>
                <td>{item.high}</td>
                <td>{item.low}</td>
                <td>{item.close}</td>
                <td>{item.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
 );
};

export default Dashboard;
