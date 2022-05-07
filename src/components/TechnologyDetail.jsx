import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TechnologyDetail = () => {
  const [tech, setTech] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/technology/${resId}`, {
      method: "GET",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        setTech(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [resId]);
  return (
    <div>
    <div>
      <img src={tech.image} alt="" />
      <h1>{tech.title}</h1>
      <h2>{tech.author}</h2>
      <p >{tech.description}</p>
      <h3>₹{tech.price}</h3>
      <div><h4>ISBN:{tech.id}</h4></div>
      <div><h5>reviews:{tech.reviews}</h5></div>
    </div>
  </div>
  );
};