import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Books.module.css'
export const TechnologyBooks = () => {
    const [tech,setTech]=useState([])
    useEffect(() => {
		fetch("http://localhost:3001/technology", {
			method: "GET",
			headers: { "Content-type": "application/json;charset=UTF-8" },
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setTech(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
  return (
    <div>
   <div className={styles.Outer}>
        {tech.map((item)=>(
             <Link style={{textDecoration:"none"}} to={`./${item.id}`}><div className={styles.Inner}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h5>{item.price}</h5>
            </div></Link>
        ))}
    </div>
    </div>
  )
}