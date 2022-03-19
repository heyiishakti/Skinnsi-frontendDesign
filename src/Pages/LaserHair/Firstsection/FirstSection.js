import React from 'react'
import './Firstsection.css'

const FirstSection = () => {
  return (
      <div>
          <section className='sectionL'> 
              <div className='firstSectionL'>
                  <h1>No more painful<br/>
                      waxing!<br/>
                      Get flawless skin, the<br/>
                      smooothest way </h1>
                  <p>Enjoy a hairless beach body <br />
                    with our Laser Hair Reduction (LHR).<br/></p>
                  <button className='button' style={{color: 'white'}}>book me a session</button>
              </div>
              <div className='secondSectionL'>
                  <img src='https://assets.toothsi.in/lhr_banner_c1e9b9018c.webp?q=75&w=750' alt='skinnsi-header' />
              </div>
          </section>
    </div>
  )
}

export default FirstSection