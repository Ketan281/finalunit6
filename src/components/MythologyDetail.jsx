import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MythologyDetail = () => {
  const [myth, setMyth] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/mythology/${resId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        setMyth(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resId]);
  return (
    <div>
      <div>
        <img src={myth.image} alt="" />
        <h1>{myth.title}</h1>
        <h2>{myth.author}</h2>
        <p>{myth.description}</p>
        <h3>₹{myth.price}</h3>
        <div><h4>ISBN:{myth.id}</h4></div>
        <div><h5>reviews:{myth.reviews}</h5></div>
      </div>
    </div>
  );
};