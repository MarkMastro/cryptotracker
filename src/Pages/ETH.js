import React, {useEffect, useState} from 'react';
import "./ETH.css"
import StockQuote from '../Components/StockQuote/StockQuote';
import usePriceWebSocket from '../hooks/usePriceWebsocket';
export default function ETH() {
  
  const {price, isLoading, priceClass, orderBook} = usePriceWebSocket({livePriceSocket: 'ethusdt@trade', orderBookSocket:'ethusdt@depth5' })


  // const [price, setPrice] = useState();
  // const [priceClass, setPriceClass] = useState("");
  // const [isLoading, setIsLoading] = useState(true)
  // const [orderBook, setOrderBook] = useState({})
  // useEffect(() => {
  //   const ws = new WebSocket('wss://stream.binance.com:9443/ws');
  //   const ws2 = new WebSocket('wss://stream.binance.com:9443/ws');

  //   const msg = {
  //     method: 'SUBSCRIBE',
  //     params: ['ethusdt@trade'],
  //     id: 1,
  //   };
  //   const msg2 = {
  //     method: 'SUBSCRIBE',
  //     params: ['ethusdt@depth5'],
  //     id: 1,
  //   };
    
  //   ws.onopen = () => {
  //     ws.send(JSON.stringify(msg));
  //     console.log("1st connected")

  //   };

  //   ws2.onopen = () => {

  //     ws2.send(JSON.stringify(msg2))
  //     console.log("second connected")
  //   }

  //   ws.onmessage=(event)=>{
  //     setIsLoading(false)
  //     const data = JSON.parse(event.data)
  //     data.p > price ?  setPriceClass("price-up") : setPriceClass("price-down");
  //     setPrice(data.p.slice(0,-6))
  //   }

  //   ws2.onmessage=(event)=>{
  //     const data = JSON.parse(event.data)
  //     setOrderBook(data)
  //   }


  //   return ()=>{
  //     ws.close();
  //   }

  // }, [])



  return (
    <>  
      <div>ETH</div>
      {isLoading ? <p>Loading...</p> : <StockQuote priceClass={priceClass} orderBook={orderBook} price={price}/> }
    </>
  )
}
