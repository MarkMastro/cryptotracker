import React, { useEffect, useState } from 'react'
import "./BTC.css";
export default function BTC() {
  const [btcPrice, setBtcPrice] = useState();
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');
    const msg = {
      method: 'SUBSCRIBE',
      params: ['btcusdt@trade'],
      id: 1,
    };
    
    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage=(event)=>{
      setIsLoading(false)
      const data = JSON.parse(event.data)
      setBtcPrice(data.p)
    }
    return ()=>{
      ws.close();
    }

  }, [])
  return (
    <>
      <div>BTC</div>
      {isLoading ? <p>Loading...</p> :<p class="current-price">{btcPrice}</p>}
    </>
  )
}
