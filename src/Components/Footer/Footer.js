import React from 'react'

import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="skinnsi">
                <div className='one'>
                    <img src='https://assets.toothsi.in/logo_ba7eedb67a.svg?q=75&w=256' alt=''/>
                </div>
                <div className='two'>
                    <h5>everything skinnsi</h5>
                    <p>laser hair removal</p>
                    <p>dermafacial</p>
                </div>
                <div className='three' >
                    <h5>about the brand</h5>
                    <p>about us</p>
                    <p>blog</p>
                </div>
                <div className='four'>
                    <h5>the cool stuff</h5>
                    <p>instagram</p>
                    <p>facebook</p>
                </div>
                <div className='five'>
                    <h5>chat with us</h5>
                    <i class="fa-brands fa-adversal"></i><p>+91 8976941251</p>
                    <p>info@skinnsi.in</p>
                    <p>+91 9136994234</p>
                    <p >9:00 AM to 10:00 PM</p>

                </div>

            </div>
            <div className='paraBackground'>
                <p>&copy;2021 skinnsi. All Rights Reserved. | terms of use | privacy policy | refund policy</p>
            </div>


        </footer>

    )
}

export default Footer