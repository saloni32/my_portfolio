import React from 'react'
import {Instagram,Facebook,Twitter,LinkedIn, GitHub} from "@material-ui/icons"
import './end.scss'

const End = () => {
    return (
        <div className='end' id="end">
            <div className="left-end">
              <img src="assets/handshake.jpeg" alt=""></img>
            </div>
            <div className="right-end">
              <h1>Saloni Vaidya</h1>
              <h2>Email: vaidyasaloni32@gmail.com</h2>
              <h2>Phone: +916264172210</h2>
              <h2>Address: 18,Managlam Parisar,<br/>Barnagar,<br/> dist. Ujjain,M.P.</h2>
              <h1 className='stay'>Stay Connected</h1>
              <div className="images">
                    <a href=""><Instagram className='icons'/></a>
                    <a href=""><Facebook className='icons'/></a>
                    <a href=""><Twitter className='icons'/></a>
                    <a href=""><LinkedIn className='icons'/></a>
                    <a href=""><GitHub className='icons'/></a>
              </div>
              <p>&copy; 2022 Copyright</p>
            </div>
        </div>
      )
    }

export default End