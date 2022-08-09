import React from 'react'
import "./topbar.scss"
import {Person,Mail,LinkedIn, GitHub,Poll} from "@material-ui/icons"
import { orange } from '@material-ui/core/colors'
const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href="#intro" className='logo'>Home</a>
          <div className='itemContainer'>
            <Person className='icons'/>
            <a href="tel:+916264172210">+91 6264172210</a>
          </div>
          <div className='itemContainer'>
            <Mail className='icons'/>
            <a href='mailto:vaidyasaloni32@gmail.com'>vaidyasaloni32@gmail.com</a>
          </div>
          <div className='itemContainer'>
            <LinkedIn className='icons'/>
            <a href="https://www.linkedin.com/in/saloni-vaidya-a3bb451a5">LinkedIn</a>
          </div>
          <div className='itemContainer'>
            <GitHub className='icons'/>
            <a href="https://github.com/saloni32">Github</a>
          </div>
          <div className='itemContainer'>
            <Poll className='icons'/>
            <a href="https://www.codechef.com/users/vaidyasaloni6">Codechef</a>
          </div>
        </div>
        
        <div className='right'>
            <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar