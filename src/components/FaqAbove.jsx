import React from 'react'
import faqaboveimg from '../assets/faqaboveimg.png'
import faqabovebg from '../assets/faqabovebg.png'
import './Footer.css'

function FaqAbove() {
    return (
        <div className='Faqabove'>
            <div className="imgFaqAbove">
                <div className="topimgabove">
                    <img src={faqaboveimg} alt="" />
                </div>
                <div className="bgimgabove">
                    <img src={faqabovebg} alt="" />
                </div>
            </div>
            <div className="rightFaqabove">
                <div className="toprightfaqabove">
                    <h3>Join
                        <span>
                            8,000 business
                        </span>
                        <br />
                        using TRC to get reviews
                    </h3>
                    <p>
                        Eget at imperdiet vel sodales aliquam. Sed sapien diam orci ipsum neque est egestas.
                        Morbi faucibus odio nunc, egestas nec sit rutrum suscipit.
                    </p>
                </div>
                <div className="bottomrightfaqabove">
                    <p>
                        “ Morbi quam pellentesque blandit tellus duis placerat pellentesque ultrices. Risus pulvinar enim, id in morbi tortor elementum aliquam! ”
                    </p>
                    <div className="namefaqabove">
                        <div className="Namee">
                            <h6>
                                - Ahmad Dokidis
                            </h6>
                            <p>
                                FLORIST’S OWNER
                            </p>
                        </div>
                        <p>
                            &lt; 1/4 &gt;
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaqAbove
