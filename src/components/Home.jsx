import React from 'react'
import styles from "./Books.module.css";
import { Link } from 'react-router-dom';
const Home = () => {

  const [home,setHome]=React.useState([]);
    
  React.useEffect(() => {
  fetch("http://localhost:3001/books", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      setHome(response);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div>Hello there, Lets explore this library
      {home.map((item)=>(
             <Link style={{textDecoration:"none"}} to={`./${item.id}`}><div className={styles.Inner}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h5>{item.price}</h5>
            </div></Link>
        ))}
    </div>
  )
}

export default Home