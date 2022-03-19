import React from 'react'
import './Cards.css'

const Cards = () => {
  return (
      <div>
      <div className='reviewCards'>
        <h1>love letters</h1>
        <p>Some invaluable gems from our customers written through emails, DMs, comments and letter.</p>
              <div className='threeCards'>
                    <div className='boxCard' style={{margin: '20px 0px 0px 370px', background:'#e03c31'}}>
                      <p>"My therapist Jamna is just great in 
                          her job. It was my second session for
                          full body hair removal. She made me
                          feel sooo comfortable and relaxed. 
                          Jamna really is very kind and soft 
                          spoken and helped me alot with my 
                          skin's acne issues as well. 
                          Throughout the session she made
                          sure I wasn't experiencing any 
                          discomfort. I did not feel any pain 
                          and literally slept while the session
                          thanks to painless hair removal and 
                          Jamna's expertise. Skin feels so soft 
                          and smooth now. Thank you so  
                          much Also, she take utmost care 
                          with respect to corona protocol.
                          Proper hygiene and safety were maintained.
                          She consulted  the dermatologist as 
                          well before starting the process 
                          and changed the machine temperature, etc.
                          according to my skin  type."</p><hr />
                      <div className='textEnd'>
                          <h5>Radhika Bharadwaj</h5>
                            <p>Google Reviews - July 2021</p>
                      </div>
                    </div>
                    <div className='boxCards' style={{margin: '20px 0px 0px 0px', background:'white'}}>
                      <p>Today was my first session. My<br/>
                          therapist was Saba. She was<br/>
                          very polite and professional.<br/>
                          Hygiene was on point.  Loved the <br/>
                          overall session.  It was painless<br/>
                          and done at the comfort of my home.<br/>
                          Thank you Saba . Thank you skinns</p>
                      <hr />
                      <div className='textEnd'>
                          <h5 style={{color:'#e03c31'}}>Sair Mirza</h5>
                            <p style={{color:'#e03c31'}}>Google Reviews - August 2021</p>
                      </div>
                    </div>
                    <div className='boxCard'style={{margin: '20px 370px 0px 0px'}}>
                      <p style={{ color: '#424242', margin: '180px 0px 0px 0px', textAlign: 'center' }}>
                          I got my first session done today,<br/>
                          I was very impressed. My therapist
                          was Roma. She was well mannered, polite,
                          supportive and made me feel comfortable
                          throughout the session.She was very informative
                          about the procedure and explained the process
                          very well and answered all my questions patiently.
                          And took all COVID safety measures.</p>
                      <hr style={{ margin: '180px 0px 0px 0px' }} />
                      <div className='textEnd'>
                          <h5 style={{color:'#424242', padding:'6px 0px 0px 0px'}}>Usma Farin</h5>
                            <p style={{color:'#424242'}}>Google Reviews - September 2021</p>
                      </div>
                    </div>
                </div>
                <div className='threeCards'>
                    <div className='boxCard' style={{margin: '20px 0px 0px 370px', background:'#424242'}} >
                      <p style={{margin:'180px 0px 0px 0px'}}>
                          Done with first session of full body <br/>
                          hair removal from Madhuri and Vaishali.<br/>
                          Both of them were polite and professional.<br/>
                          They have emphasised the need for aftercare
                          in both sessions which I highly appreciate.
                          Have done the treatment from Kaya skin
                          clinic earlier but would definitely
                          recommend skinnsi instead of Kaya now. 
                          Hopefully I’ll see results soon!<br/>
                      </p>
                       <hr style={{ margin: '180px 0px 0px 0px' }} />
                      <div className='textEnd'>
                          <h5 style={{color:'white', padding:'6px 0px 0px 0px'}}>Sonam Bayawat</h5>
                            <p style={{color:'rgb(255, 255, 255)'}}>Google Reviews - October 2021</p>
                      </div>
                    </div>
                    <div className='boxCard' style={{margin: '20px 0px 0px 0px', background:'#e03c31'}}>
                      <p style={{margin: '220px 0px 0px 0px'}}>I am shikha saini treated by kavita
                          from Skinnsi, she was very 
                          professional and took all necessary
                          precautions. Skinnsi has this Covid
                          Protocol where they will wear PPE
                          Kit, sanitize everything and
                          do temperature check very
                          nice thanks to </p>
                      <hr style={{ margin: '217px 0px 0px 0px' }} />
                      <div className='textEnd'>
                          <h5 style={{color:'white', padding:'6px 0px 0px 0px'}}>Deepika Singh</h5>
                            <p style={{color:'rgb(255, 255, 255)'}}>Google Reviews - November 2021</p>
                      </div>
                    </div>
                    <div className='boxCards' style={{margin: '20px 370px 0px 0px', background:'white'}}>
                      <p>
                          Had an amaizingly new experience,
                          did laser hair removal. Saba made
                          sure i was very comfortable and
                          didnt feel any pain. The procedure
                          was done in about 4&1/2 hours, it
                          wasnt rushed or anything. Totally
                          recommend skinnsi for laser hair
                          removal
                      </p>
                      <hr />
                      <div className='textEnd'>
                          <h5 style={{color:'#e03c31'}}>Krishna Priya</h5>
                            <p style={{color:'#e03c31'}}>Google Reviews - December 2021</p>
                      </div>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default Cards