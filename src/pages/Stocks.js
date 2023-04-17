import {useParams} from "react-router-dom"

export default function Stocks(props) {
    const params = useParams()
    const symbol = params.symbol
    const selectedStock = props.stocksArray.find((stock) => {
        return symbol === stock.symbol
    })
  return (
    <div className="stock-info-bar">
        <h2 className="Name">Name: {selectedStock.name}</h2>
        <h4 className="Price">Price: {selectedStock.lastPrice}</h4>
        <h4 className="Change">Change: {selectedStock.change}</h4>
        <h4 className="High">High: {selectedStock.high}</h4>
        <h4 className="Low">Low: {selectedStock.low}</h4>
        <h4 className="Open">Open: {selectedStock.open}</h4>
    </div>
  )
}
