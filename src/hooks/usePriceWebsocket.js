import { useState, useEffect } from "react";

export default function usePriceWebSocket(subscriptions){
    const [price, setPrice] = useState();
  const [priceClass, setPriceClass] = useState("");
  const [isLoading, setIsLoading] = useState(true)
  const [orderBook, setOrderBook] = useState({})

    const {livePriceSocket, orderBookSocket} = subscriptions;

    useEffect(() => {

        const ws = new WebSocket('wss://stream.binance.com:9443/ws');
        const ws2 = new WebSocket('wss://stream.binance.com:9443/ws');

        const msg = {
        method: 'SUBSCRIBE',
        params: [livePriceSocket],
        id: 1,
        };
        const msg2 = {
        method: 'SUBSCRIBE',
        params: [orderBookSocket],
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
        data.p > price ?  setPriceClass("price-up") : setPriceClass("price-down");
        setPrice(data.p.slice(0,-6))
        }

        ws2.onmessage=(event)=>{
        const data = JSON.parse(event.data)
        setOrderBook(data)
        }


        return ()=>{
        ws.close();
        }
    }, [])
    return {price, isLoading, priceClass, orderBook};
}