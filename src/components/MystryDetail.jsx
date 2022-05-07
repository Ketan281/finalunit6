import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MystryDetail = () => {
  const [mystry, setMystry] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/mystery/${resId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        setMystry(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resId]);
  
  return (
    <div>
      <div>
        <img src={mystry.image} alt="" />
        <h1>{mystry.title}</h1>
        <h2>{mystry.author}</h2>
        <p>{mystry.description}</p>
        <h3>₹{mystry.price}</h3>
        <div><h4>ISBN:{mystry.id}</h4></div>
        <div><h5>reviews:{mystry.reviews}</h5></div>
      </div>
    </div>
  );
};