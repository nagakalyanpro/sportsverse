import React, {useState, useEffect} from 'react'
import Banner from '../banner/Banner'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";


import './nav.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  
  const menuHandler =() =>{
    setShowMenu(!showMenu)
  }

  return (
    <div className="nav-section">
           
      <div className="nav-title">
      <button onClick={menuHandler}>{showMenu? <CloseIcon /> : <MenuIcon /> }</button> <span><Link to="/" style={{textDecoration:"none", color:"aliceblue"}}>Sportsverse</Link></span>
      <div className="nav-home">
        <h3><Link to="/" style={{textDecoration:"none", color:"aliceblue"}}><HomeIcon /></Link></h3>
      </div>
      </div>
     <div className="menu-sidebar">
     <div className={showMenu? "sidebar-section": "sidebar-none"}>
      <div className="portfolio">
        <h2>My Portfolio</h2>
      </div>
      <div className="teams-sec">
        <h2>Teams</h2>
        <hr />
        <div className="team-list">
          <ul>
           <li> <Link to="/kolkata"  style={{textDecoration:"none", color:"aliceblue"}}>
            Kolkata
            </Link></li>
           <li> <Link to="/guj" style={{textDecoration:"none", color:"aliceblue"}}>
            Gujarat
            </Link></li>
           <li> <Link to="/bang" style={{textDecoration:"none", color:"aliceblue"}}>
            Bangalore
            </Link></li>
           <li> <Link to="/luck" style={{textDecoration:"none", color:"aliceblue"}}>
            Lucknow
            </Link></li>
           <li> <Link to="/raja" style={{textDecoration:"none", color:"aliceblue"}}>
            Rajasthan
            </Link></li>
           <li> <Link to="/punj" style={{textDecoration:"none", color:"aliceblue"}}>
            Punjab
            </Link></li>
           <li> <Link to="/hyd" style={{textDecoration:"none", color:"aliceblue"}}>
            Hyderabad
            </Link></li>
           <li> <Link to="/mumb" style={{textDecoration:"none", color:"aliceblue"}}>
            Mumbai
            </Link></li>
           <li> <Link to="/chen" style={{textDecoration:"none", color:"aliceblue"}}>
            Chennai
            </Link></li>

          </ul>
        </div>
      </div>
    </div>
     </div>
    </div>
  )
}

export default Navbar