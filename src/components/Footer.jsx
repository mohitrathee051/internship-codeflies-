import React from 'react'
import logo from '../assets/logo.png'
import FooterIcons from '../assets/FooterIcons.png'
import './Footer.css'


function Footer() {
    return (
        <div className='Footer'>
            <div className="FooterTop">
                <div className="TopLeftFooter">
                    <img src={logo} alt="" />
                    <p>
                        Money Back Guarantee is valid for up to 30 days after the purchase of a new plan. Guarantee does not apply for businesses that have received a demo kit or have previously tried The Review Card services.
                    </p>
                </div>
                <div className="Righty">
                    <div className="TopMidFooter">
                        <p>
                            Contact Us
                        </p>
                        <p>
                            17 State Street, Suite 4000,<br />
                            New York, NY 10004
                        </p>
                        <p className='EmailID'>
                            hello@thereviewcard.com
                        </p>
                        <p>
                            (929) 276-1937
                        </p>
                    </div>
                    <div className="TopRightFooter">
                        <p>
                            NEED HELP?
                        </p>
                        <p>
                            Text CARDHELP to 555888
                        </p>
                        <p>
                            Text stop to stop, msg and data rates may apply. Check our <span>Terms</span> and <span>Privacy Policy</span> .
                        </p>
                    </div>
                </div>

            </div>
            <div className="FooterBottom">
                <p>© 2020 - 2021 The Review Card. All Rights Reserved</p>
                <img src={FooterIcons} alt="" />
            </div>

        </div>
    )
}

export default Footer
