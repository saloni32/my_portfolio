import React from 'react'
import "./testimonials.scss"
const Testimonials = () => {
const  data=[
    {
      id:1,
      title:"Languages",
      img:"assets/lang.png",
      skills:["C++","C","HTML","CSS"]
    },
    {
      id:2,
      title:"Technologies",
      img:"assets/tech.png",
      skills:["ReactJS", "Redux", "NodeJS", "ExpressJS"],
    },
    {
      id:3,
      title:"Tools",
      img:"assets/tool.jpg",
      skills:["Git", "Github", "VS Code"],
    },
    {
      id:4,
      title:"CS Subjects",
      img:"assets/cs.png",
      skills:["OOPs", "Data Structures & Algorithms", "DBMS", "OS"],
    },
    {
      id:5,
      title:"Soft Skills",
      img:"assets/soft.png",
      skills:["Leadership" ,"Team Work"," Event Management", "Public Speaking" , "Problem Solving"],
    }
  ]
  return (
    <div className='testimonials' id='testimonials'>
      <h1> Skills</h1>
      <div className="container">
        {data.map(d =>(
        <div className="card">
          <div className="card-inner">
            <div className="front">
                    <div className="top">
                        <img src={d.img} className='' alt=""/>
                    </div>
                    <div className="center">
                        {d.title}
                    </div>
            </div>
            <div className="back">
                  {/* {d.skills.map(item =>(
                    <h3>{item}</h3>
                  ))} */}
                  <h3>hiii</h3>
            </div>
          </div>
        </div>

        ))}
      </div>
    </div>
  )
}

export default Testimonials