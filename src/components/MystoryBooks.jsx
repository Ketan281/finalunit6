import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./Books.module.css";
export const MystoryBooks = () => {
    const [mystry,setMystry]=useState([])

    useEffect(() => {
		fetch("http://localhost:3001/mystery", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setMystry(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	
  return (
    <div className={styles.Outer}>
    {mystry.map((item)=>(
         <Link style={{textDecoration:"none"}} to={`./${item.id}`}><div className={styles.Inner}>
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <h5>{item.price}</h5>
        </div></Link>
    ))}
</div>
  )
}