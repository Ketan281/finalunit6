import React from 'react'
import { Link } from 'react-router-dom'
import { NavWrap } from './Navwrap.styled'

export const Navbar = () => {
  return (
    <div>
         <NavWrap >
            <div >
				<Link to="/">Home</Link>
			</div>
     
            <div >
				<Link to="/mythologyBooks">Mythology</Link>
			</div>
			<div >
				<Link to="/historyBooks">History</Link>
			</div>
            <div >
				<Link to="/technologyBooks">Technology</Link>
			</div>
			<div >
				<Link to="/mysteryBooks">Mystery</Link>
			</div>
		</NavWrap>
    </div>
  )
}