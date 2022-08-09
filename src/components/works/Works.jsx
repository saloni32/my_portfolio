import React from 'react'
import { useState } from 'react';
import "./works.scss"

const Works = () => {
  const [currentSlide,setCurrentSlide]=useState(0);
  const data=[{
    id: "1",
    icon: "assets/stackicon.png",
    title: "Stack Overflow Clone",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magnam architecto accusantium ",
    img: "assets/stack.png",
    link:"https://stack-overflow-clone-saloni.netlify.app/"
  },
  {
    id: "2",
    icon: "assets/manit.png",
    title: "MANIT Placement Website",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magnam architecto accusantium ",
    img: "assets/Untitled.png",
    link:"https://manit-placement-cell.netlify.app/"
  },
  {
    id: "3",
    icon: "",
    title: "Portfolio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magnam architecto accusantium ",
    img: "assets/port.png",
    link:"#intro"
  }
];
  const handleClick = (way)=>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
                   : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }
  return (
    <>
    <div className='works' id='works'>
      <h1>PROJECTS</h1>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="heading">
                    <div className="imgContainer">
                      <img src={d.icon} alt=""/>
                    </div>
                    <h2>
                      {d.title}
                    </h2>
                </div>
                
                <p>{d.desc}</p>
                {/* <a href={d.link}>Click here</a> */}
              </div>
            </div>
            <div className="right">
              <a href={d.link}><img src={d.img} alt=""/></a>
              <h3>Click here to view the website</h3>
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/down.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/down.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
    </>
  )
}

export default Works