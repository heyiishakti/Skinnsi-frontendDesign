import React from 'react'
import './Sectionfour.css'

const Sectionfour = () => {
  return (
      <>
          <section className='fourthContainer'>
          <h1>laser for guys</h1>
          <div className='image'>
              <img src='https://assets.toothsi.in/boys_bg_e95a007d75.webp' style={{height: '440px', width: '1200px'}} alt='' />
              <p>
                  No, we didn’t forget you. Get rid of unwanted<br/>
                  and excess hair, safely and painlessly.
              </p>
              
          </div>
          </section>
          
          <section className='fifthContainer'>
              <div >
                  <img className='roundImage' src='https://skinnsi.in/images/trialsession/skinnsi_1_2806.png' alt='' />
                  
              </div>
              <div className='headButton'>
                  <h4>Would you like to experience laser hair<br />
                      reduction before going for a full<br />
                      session?
                  </h4>
                  <button>book a trial session</button>
              </div>
          </section>
      </>
  )
}

export default Sectionfour