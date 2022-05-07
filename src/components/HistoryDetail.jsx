import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const HistoryDetail = () => {
  const [history, setHistory] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/history/${resId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setHistory(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resId]);

  
  return (
    <div>
      <div >
        <img src={history.image} alt="" />
        <h1>{history.title}</h1>
        <h2>{history.author}</h2>
        <p>{history.description}</p>
        <h3>₹{history.price}</h3>
        <div><h4>ISBN:{history.id}</h4></div>
        <div><h5>reviews:{history.reviews}</h5></div>
      </div>
    </div>
  );
};