import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const HistoryDetail = () => {
  const [home, setHome] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/books/${resId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setHome(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resId]);

  
  return (
    <div>
      <div >
        <img src={home.image} alt="" />
        <h1>{home.title}</h1>
        <h2>{home.author}</h2>
        <p>{home.description}</p>
        <h3>₹{home.price}</h3>
        <div><h4>ISBN:{home.id}</h4></div>
        <div><h5>reviews:{home.reviews}</h5></div>
      </div>
    </div>
  );
};