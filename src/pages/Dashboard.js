import React from 'react'
import {Link} from "react-router-dom"

export default function Dashboard(props) {
  return (
    <div className='stocks'>
        {props.stocksArray.map((stock, i) => {
            const {name,change,high,low,symbol} = stock;
            return(
                <div className='dash-cont' key={i}>
               <p className='link'> <Link to={`/stocks/${symbol}`}><h3>{name}</h3></Link></p>
               <p className='info'><b>Change:</b>{change}<b>High:</b>{high}<b>Low:</b>{low}</p> 
                </div>
            )
        })}
    </div>
  )
}
