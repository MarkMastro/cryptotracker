import React, { useEffect, useState } from 'react'
import "./ADA.css"
export default function BTC() {
  const [adaPrice, setAdaPrice] = useState();
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');
    const msg = {
      method: 'SUBSCRIBE',
      params: ['adausdt@trade'],
      id: 1,
    };
    
    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage=(event)=>{
      setIsLoading(false);
      const data = JSON.parse(event.data)
      setAdaPrice(data.p)
    }
    return ()=>{
      ws.close();
    }

  }, [])
  return (
    <>
      <div>Cardano Current Price</div>
      {isLoading ? <p>Loading...</p> : <p class="current-price">{adaPrice}</p>}
    </>
  )
}
