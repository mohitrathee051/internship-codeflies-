import React from 'react'
import iicon from '../assets/iicon.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import './NavBar.css'


function Belowimg() {
    return (
        <div className="bottomimgpage1">
            <div className="fullbelowimg">
                <div className="belowimgleft">
                    <p className='belowimgleftpara1'>Everything you’ll need to grow your review count as quickly as possible</p>
                    <p className='belowimgleftpara2'>If for any reason you are not completely satisfied with the number of reviews you get, we’ll refund your money in full.</p>
                </div>
                <div className="fbelowimgright">
                    <div className="iconone">
                        <img src={icon1} alt="icon1" />
                        <p>2000 Starter cards in your chosen style</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="icontwo">
                        <img src={icon2} alt="icon2" />
                        <p>Unlimited customer visits to your review portal</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconthree">
                        <img src={icon3} alt="icon3" />
                        <p>Unlimited free card refills (text REFILL to 900900)</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconfour">
                        <img src={icon4} alt="icon4" />
                        <p>Unlimited access to our customer support team</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconfive">
                        <img src={icon5} alt="icon5" />
                        <p>Unlimited access to our customer support team</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconsix">
                        <img src={icon6} alt="icon6" />
                        <p>Unlimited access to our customer support team</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconseven">
                        <img src={icon7} alt="icon7" />
                        <p>Unlimited access to our customer support team</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                    <div className="iconeight">
                        <img src={icon8} alt="icon8" />
                        <p>Unlimited access to our customer support team</p>
                        <img src={iicon} alt="iicon" />
                    </div>
                </div>
            </div>
            <div className="endlinepage1">
                <p>Still have questions? Call us at 800 - 845 - 8928</p>
            </div>
        </div>
    )
}

export default Belowimg
