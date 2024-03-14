import React from 'react'
import faqaboveimg from '../assets/faqaboveimg.png'
import faqabovebg from '../assets/faqabovebg.png'
import styles from './FaqAbove.module.css'

function FaqAbove() {
    return (
        <div className={styles.Faqabove}>
            <div className={styles.imgFaqAbove}>
                <div className={styles.topimgabove}>
                    <img src={faqaboveimg} alt="" />
                </div>
                <div className={styles.bgimgabove}>
                    <img src={faqabovebg} alt="" />
                </div>
            </div>
            <div className={styles.rightFaqabove}>
                <div className={styles.toprightfaqabove}>
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
                <div className={styles.bottomrightfaqabove}>
                    <p>
                        “ Morbi quam pellentesque blandit tellus duis placerat pellentesque ultrices. Risus pulvinar enim, id in morbi tortor elementum aliquam! ”
                    </p>
                    <div className={styles.namefaqabove}>
                        <div className={styles.Namee}>
                            <h6>
                                - Ahmad Dokidis
                            </h6>
                            <p>
                                FLORIST’S OWNER
                            </p>
                        </div>
                        <div>
                            <span>&lt;</span>
                            <span>1/3</span>
                            <span>&gt;</span>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaqAbove
