import React from 'react'
import uparrow from '../assets/uparrow.png'
import downarrow from '../assets/downarrow.png'
import styles from './Faq.module.css'

function Faq() {
    return (
        <div className={styles.FAQsec}>
            <div className={styles.FaqHead}>
                <h3>
                    Frequently Asked Questions.
                </h3>
                <div className={styles.line}></div>
                <p>
                    Risus ultricies viverra sed risus egestas pretium commodo nisl.
                </p>
            </div>
            <div className={styles.Faq1}>
                <div className={styles.Quess1}>
                    <p>
                        How does the 60-day money back guarantee work?
                    </p>
                    <img src={uparrow} alt="" />
                </div>
                <p>
                    If for any reason you are not completely satisfied with the number of reviews your business gets, cancel within the first 60 days and we’ll refund your money, no questions asked. To cancel, text CARDHELP to 900900 or call us at (800) 845-8928.
                </p>
            </div>
            <div className={styles.Faq2}>
                <p>
                    Can I change the review website linked to my cards?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq3}>
                <p>
                    Are card refills really free and unlimited?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq4}>
                <p>
                    Can I cancel any time?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq5}>
                <p>
                    What are starter cards?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq6}>
                <p>
                    How will I know if this is working for my business?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq7}>
                <p>
                    Will I get any negative reviews?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq8}>
                <p>
                    What forms of payment do you accept?
                </p>
                <img src={downarrow} alt="" />
            </div>
            <div className={styles.Faq9}>
                <p>
                    Still have questions?
                </p>
                <img src={downarrow} alt="" />
            </div>
        </div>
    )
}

export default Faq
