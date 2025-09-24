import React, { useState,useEffect} from "react";
import axios from 'axios';

const Positions = () => {
  const [allpositions,setAllPositions]=useState([]);
  useEffect(()=>{
  const API_URL = `${process.env.REACT_APP_API_URL}/allpositions`;
  axios.get(`${API_URL}/allPositions`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }).then((res) => {
      setAllPositions(res.data);
    }).catch((err) => {
      if (err.response && (err.response.status === 401 || err.response.status === 403)) {
        window.location.href = "/login";
      }
    });
  },[])
  return (
    <>
      <h3 className="title">Positions ({allpositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allpositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayChange = stock.loss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}{" "}
                </td>
                <td className={dayChange}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
