import React from 'react'
import './Dermasectionthree.css'
import ReactPlayer from 'react-player';

const Dermasectionthree = () => {
  return (
      <>
      {/* // Section Three */}
            <section className='sectionThreeD'>
                <div className='sectionThreeDone'>
                    <ReactPlayer light='https://assets.toothsi.in/Image_webp_56ea30a76d.webp' url='https://youtu.be/jxrytYZYj1Y' width="690px" height="390px" />
                </div>
                <div className='sectionThreeDtwo'>
                    <h1>Dermafacials <br/>
                        rock, here’s why
                    </h1>
                    <p>You know those parlour aunties<br />
                        pushing you to get a facial because<br />
                        your face has lost its glow? Well, don’t<br />
                        listen to them.</p>
                </div>
            </section>
      </>
  )
}

export default Dermasectionthree