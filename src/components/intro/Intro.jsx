import React from 'react'
import "./intro.scss"


const Intro = () => {
  // const textRef = useRef();

  // useEffect(()=>{
  //   init(textRef.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ['devloper','designer'],
  //   });
  // },[]);
  return (
    <div className='intro' id='intro'>
        <div className='left'>
          <div className='imageContainer'>
            <img src='' alt=''/>
          </div>
        </div>
        <div className='right'>
          <div className='wrapper'>

          <h1>
                <div class="c1">
                  <div class="type">Hi,there!!</div>
                </div><br/>
                <div class="c2">
                  <div class="type2">I'm Saloni Vaidya</div>
                </div><br/>
                <div class="c3">
                  <div class="type3">B-Tech, Final Year</div>
                </div><br/>
                <div class="c4">
                  <div class="type4">MANIT, Bhopal</div>
                </div><br/>
          </h1>
              
          </div>
          <a href='#myportfolio'>
            <img src="assets/down.png" alt=''/>
          </a>
        </div>
    </div>
  )
}

export default Intro