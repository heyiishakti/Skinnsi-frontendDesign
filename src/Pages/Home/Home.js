import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Accordian from './Accordian/Accordian'
import Cards from './Cards/Cards'
import './Home.css'

const Home = () => {

  return (
      <>
          
          <Navbar/>
          {/* Hero Section  */}


          <section className='sectionH'> 
              <div className='firstSectionH'>
                  <h1>let us<br/>
                      introduce<br/>
                      you to a<br/>
                      new YOU!</h1>
                  <p>More good skin. More radiance. More<br/>
                      smoothness. More youthfulness. With<br/>
                      skinnsi's dermatologists, technology and<br/>
                      at-home service, see the version of you, you<br/>
                      were waiting for.</p>
                  <button className='button' style={{color: 'white'}}>get Started</button>
              </div>
              <div className='imgSection'>
                  <img  src='https://assets.toothsi.in/home_banner_669fe2eaac.webp?q=75&w=750' alt='skinnsi-header' />
              </div>
          </section>

          {/* Second Section */}

          <section className='sectionTwoH'>
              <div className='headingImagesH'>
                      <img src='https://assets.toothsi.in/lhr_e5b4eb79d7.webp?q=75&w=640' alt='img' />
                      <h1>laser hair reduction</h1>
                      <p>Get freedom from unwanted<br/>
                          body hair and the need for<br/>
                          waxing. It's permanent. it's<br/>
                          painless.
                      </p>
              </div>
                  <div className='headingImagesH'>
                      <img src='https://assets.toothsi.in/dermafacial_2c30520b4e.webp?q=75&w=640' alt='img' />
                      <h1>dermafacial</h1>
                      <p>Deep cleansing. Exfoliation.<br/>
                          Nourishing. Skin Tightening.<br/>
                          Experience a facial designed by<br/>
                          dermatologists.
                      </p>
             </div>
          </section>


          {/* Third Section */}

          <section className="thirdSection">
              <h1>why skinnsi, why not?</h1>
              <div className='firstContainer'>
                   
                  <div className='divs'>
                      <img className='starImg' style={{height: '48px', width: '48px'}} src='https://assets.toothsi.in/star.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_home_95e2b0645b.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg' src='https://assets.toothsi.in/img_at_home_service_c357577193.webp' alt='img' />
                      <div className='box'>
                          <h1> we work from home</h1>
                          <p>Yours to be precise. Experience <br/>
                              high quality professional in-clinic<br/>
                              like treatment at the convenience &<br/>
                              safety of your home #HundoP</p>
                      </div>
                      
                  </div>

                  <div className='divs'>
                      <img className='starImg' src='https://assets.toothsi.in/star_blue.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_focused_ccc9f702dd.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg' src='https://assets.toothsi.in/image_f287cfff94.webp' alt='img' />
                      <div className='box' style={{background: 'white'}}>
                          <h1> we're tech focused</h1>
                          <p>We use the newest innovation in<br/>
                              laser technology-quadruple wavelength<br/>
                              machine widening applications to all<br/>
                              types of skin and hair</p>
                      </div>
                  </div>
                  
  
                  <div className='divs'>
                      <img className='starImg' style={{height: '48px', width: '48px'}} src='https://assets.toothsi.in/star.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_pocket_dc2dadf1c2.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg'src='https://assets.toothsi.in/img_pocket_friendly_2bfe88a554.webp' alt='img' />
                      <div className='box'>
                          <h1> we're pocket friendly</h1>
                          <p>With easy EMI options, we are<br/>
                              your pocket's best friend</p>
                      </div>
                  </div>
              </div>
              <div className='secondContainer'>
                  <div className='divs' >
                      <img className='starImg' src='https://assets.toothsi.in/star_blue.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_customise_ba214c6e98.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg' src='https://assets.toothsi.in/img_we_customise_6ee9584392.webp' alt='img' />
                      <div className='box' style={{background: 'white'}}>
                          <h1> we customize</h1>
                          <p>Not every skin's the same, so why<br/>
                              the plan. We customize your<br/>
                              treatment plan based on your<br/>
                              skin and hair type.</p>
                      </div>
                  </div>
                  
                  <div className='divs'>
                      <img className='starImg' style={{height: '48px', width: '48px'}} src='https://assets.toothsi.in/star.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_trained_8ce930f145.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg' src='https://assets.toothsi.in/img_trained_professional_c87a9c81b5.webp' alt='img' />
                      <div className='box'>
                          <h1>trained professionals</h1>
                          <p>We have expert dermatologists<br/>
                              and trained therapists on our<br/>
                              team</p>
                      </div>
                  </div>
                  
                  <div className='divs'>
                      <img className='starImg' src='https://assets.toothsi.in/star_blue.png' alt='' />
                      <img className='imgs' src='https://assets.toothsi.in/ic_call_me_a4f38a91b0.webp' style={{height: '110px', width:'110px'}} alt='' />
                      <img className='realImg' src='https://assets.toothsi.in/img_call_maybe_72f4f173f8.webp' alt='img' />
                      <div className='box' style={{background: 'white'}}>
                          <h1>call me, maybe?</h1>
                          <p>skinnsi support team will be by<br/>
                              your side, at every single step</p>
                      </div>
                  </div>
              </div>

          </section>
          <div className='AccordionClass'>
              
          {/* Accordion */}

            <Accordian />
        
        </div>
          {/* Cards */}

          <Cards />

          {/* Footer */}
        
          <div className='Footers'>
              <Footer/>
          </div>
      </>
  )
}

export default Home