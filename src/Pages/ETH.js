import React, {useEffect, useState} from 'react';
import "./ETH.css"

export default function ETH() {
  
  const [ethPrice, setEthPrice] = useState();
  const [priceClass, setPriceClass] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [Bid, setBid] = useState({})
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');
    const ws2 = new WebSocket('wss://stream.binance.com:9443/ws');

    const msg = {
      method: 'SUBSCRIBE',
      params: ['ethusdt@trade'],
      id: 1,
    };
    const msg2 = {
      method: 'SUBSCRIBE',
      params: ['ethusdt@bookTicker'],
      id: 1,
    };
    
    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
      console.log("1st connected")

    };

    ws2.onopen = () => {

      ws2.send(JSON.stringify(msg2))
      console.log("second connected")
    }

    ws.onmessage=(event)=>{
      setIsLoading(false)
      const data = JSON.parse(event.data)
      data.p > ethPrice ?  setPriceClass("price-up") : setPriceClass("price-down");
      setEthPrice(data.p.slice(0,-6))
    }

    ws2.onmessage=(event)=>{
      const data = JSON.parse(event.data)
      console.log(data)
      setBid({"bestbid": data.b.slice(0,-6), "bestbidqty": data.B, "bestask": data.a.slice(0,-6), "bestaskqty": data.A})
    }


    return ()=>{
      ws.close();
    }

  }, [])



  return (
    <>  
      <div>ETH</div>
      {isLoading ? <p>Loading...</p> : <p className={priceClass}>{ethPrice}</p>}
    </>
  )
}
