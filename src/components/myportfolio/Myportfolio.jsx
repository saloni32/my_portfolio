import React from 'react'
import { useState,useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import "./myportfolio.scss"
import {graduation, highSchool, higherSecondary} from "../../data"

const Myportfolio = () => {
  const [selected,setSelected]=useState("featured");
  const [data,setData]=useState([]);
  const list = [
    {
      id: "graduation",
      title: "Graduation",
    },
    {
      id: "higherSecondary",
      title: "Higher Secondary",
    },
    {
      id: "highSchool",
      title: "High School",
    },
    

    
  ]; 
  useEffect(()=>{

    switch(selected){
      case "graduation":
        setData(graduation);
        break;
      case "highSchool":
        setData(highSchool);
        break;
      case "higherSecondary":
        setData(higherSecondary);
        break;
      default:
        setData(graduation);
        break;
    }
  },[selected])

  return (
    <div className='myportfolio' id='myportfolio'>
      <h1>Education</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList id={ item.id} title={item.title} active={selected===item.id} setSelected={setSelected}/>
        ))}
      </ul>
        
        <div className="container">
        {data.map((d) => (
            data===graduation?
              <div className='college'>
                <div className="item">
                <img src={d.img} alt=""/>
                <h3>{d.title}<br/><br/>CGPA:{d.percentage} 
                </h3>
                </div>
              </div>
              :
            <div className='parent'>
            <div className='text'>
              <h2 className='one'>Institute: {d.title}</h2><br/>
              <h2 className='two'>Year of Study: {d.year}</h2><br/>
              <h2 className='three'>Percentage: {d.percentage}%</h2><br/>
            </div>
            <div className="item">
            <img src={d.img} alt=""/>
            <h3>Percentage: {d.percentage}%</h3>
            </div>
            </div>
        ))}
        </div>

        
    </div>
  )
}

export default Myportfolio