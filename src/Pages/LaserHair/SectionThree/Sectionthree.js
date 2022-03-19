import React from 'react'
import './Sectionthree.css'

const Sectionthree = () => {
  return (
      <>
          <section className='thirdSections'>
                    <h1>laser hair removal</h1>
                  <p>
                      What’s painless, cost-effective, a permanent solution for getting silky smooth skin? We got three words for you – Laser Hair Reduction. <br/>
                      Break the cycle of waxing, shaving, and threading as skinnsi offers the best at-home laser hair reduction in town. Forget about spending <br />
                      thousands of rupees over your lifetime as we offer up to 90% hair reduction in 6-10 months at an unbelievable introductory offer of ₹37,999 <br />
                      ₹55,999/- for 6 sessions (prices are exclusive of taxes).
                  </p>
                  
              <div className='thirdContainer'>
                  <div className='writtenText'>
                      <h4>how does laser work?</h4>
                  <p>
                      Let’s break it down and go back to the roots. (Pun intended) So, the melanin <br />
                      in your hair follicle absorbs the laser light, which heats up the hair follicle. This<br />
                      laser destroys the roots. Don’t worry, the surrounding skin will be safe. Plus, <br />
                      there will be no ingrowths. Yes, those annoying little things. All gone.<br/>
                      The result? Silky smooth skin that you can’t get enough of.<br/>
                      Enjoy the freedom of being able to wear your favorite sleeveless dresses<br />
                      whenever you want.
                  </p>
                  </div>
                  <div className='img'>
                      <img  src='https://assets.toothsi.in/img_lhr_laser_work_42177f3b55.webp' style={{height: '360px', width: '470px' }} alt=''/>
                  </div>
              </div>
          </section>

          <section className='fourthSection'>
               <h1>technology</h1>
                  <p>
                      Being the first-of-its-kind to be launched in Mumbai, skinnsi uses best of the best when it comes to technology.
                  </p>
                  
              <div className='thirdContainer2'>
                  <div className='writtenText2'>
                  <p className='paragraph'>
                          We use the latest laser technology to solve the problem of unwanted hair. <br />
                          Our technology of quadruple wavelength laser is a combination of 4 <br />
                          wavelengths - 755+810+940+1064 nm.<br />
                          <br/>
                          Compared to the traditionally used diode and triple wavelength lasers, our <br />
                          new quadruple wavelength laser reduces all types of hair – fine, medium,<br />
                          and thick hair. What’s more, it’s safe for all skin types.<br />
                          <br/>
                          The laser also has an ice-cool technology that doesn’t allow the skin to get<br />
                          heated. Talk about a comfortable and painless experience!<br/>
                          So, just sit back and bid adieu to that unwanted hair.<br/>
                  </p>
                  </div>
                  <div className='images'>
                      <img  src='https://assets.toothsi.in/img_lhr_technology_eb90da957e.webp' style={{height: '360px', width: '470px' }} alt=''/>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Sectionthree