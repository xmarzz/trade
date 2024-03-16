import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../../context/userContext'
import axios from 'axios'


const Dashboard = () => {

    const {user } = useContext(UserContext)
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/stock?symbol=AAPL');
              setStockData(response.data);
          } catch (error) {
              console.error('Failed to fetch stock data:', error);
          }
      };
      fetchData();
  }, []);


  return (
    <div className='dashboard'>

        <h1>Dashboard</h1>
        {!!user && (<h2> HI {user.name}! </h2>)}
         {stockData && (
                <div>
                    <h2>Stock Data for AAPL</h2>
                    <p>Price: {stockData['Global Quote']['05. price']}</p>
                    <p>Change: {stockData['Global Quote']['09. change']}</p>
                </div>
            )}
    </div>
  )
}

export default Dashboard

