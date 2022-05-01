import React from 'react'
import "./StockQuote.css"
import OrderBook from '../OrderBook/OrderBook';
function StockQuote(props) {

    const {orderBook, price, priceClass} = props;
  return (
    <div className="order-book">
    {orderBook}
     {price}
    </div>
  )
}

export default StockQuote