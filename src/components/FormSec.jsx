import React from 'react'
import './NavBar.css'
import Lock from '../assets/Lock.png'

function FormSec() {
    return (
        <div className='FullForm'>
            <div className="leftForm">
                <p className='Shipping'>Shipping</p>
                <div className="businessname">
                    <p>Businees Name</p>
                    <input type="text" placeholder='The Review Card' />
                </div>
                <div className="Name">
                    <div className="firstName">
                        <p>First Name</p>
                        <input type="text" placeholder='Dillon' />
                    </div>
                    <div className="lastName">
                        <p>Last Name</p>
                        <input type="text" placeholder='Kopf' />
                    </div>
                </div>
                <div className="Adress">
                    <p>Street Address</p>
                    <input type="text" placeholder='17 State Street' />
                    <p className='AddSecondLine'>Add second line</p>
                </div>
                <div className="stateZip">
                    <div className="state">
                        <p>State</p>
                        <input type="text" placeholder='New York' />
                    </div>
                    <div className="zip">
                        <p>Zip/Postal Code</p>
                        <input type="text" placeholder='10004' />
                    </div>
                </div>
                <div className="Email">
                    <p>Your Business Email (to receive your receipt)</p>
                    <input type="text" placeholder='hello@thereviewcard.com' />
                </div>
                <div className="PhoneNo">
                    <p>Phone Number</p>
                    <input type="text" placeholder='646 - 123 4567' />
                </div>

                <div className="payment">
                    <p className='paymentp'>Payment</p>
                    <div className='label1'>
                        <input type="radio" name="paymentMethod" value="creditCard" />
                        <span>Credit Card</span>
                    </div>
                    <div className='label2'>
                        <input type="radio" name="paymentMethod" value="paypal" />
                        <span>PayPal</span>
                    </div>
                </div>
                <div className="cardno">
                    <p>Card Number</p>
                    <input type="text" placeholder='1234 5678 9101 1121' />
                </div>
                <div className="ExpDate">
                    <div className="expiry">
                        <p>Expiry Date</p>
                        <input type="text" placeholder='MM/YY' />
                    </div>
                    <div className="cvc">
                        <p>CVC</p>
                        <input type="text" placeholder='CVC' />
                    </div>
                </div>
            </div>
            <div className="rightForm">
                <p className='Shipping'>Order Summary</p>
                <div className="plans">
                    <div className="monthplan">
                        <div className="radiowrapper">
                            <input type="radio" />
                            <span>Monthly Plan</span>
                        </div>


                        <p>$49.99</p>
                    </div>
                    <div className="annualplan">
                        <div className="radiowrapper">
                            <input type="radio" />
                            <span>Annual Plan</span>

                        </div>
                        <p>$499.99</p>
                    </div>
                </div>
                <div className="discount">
                    <p>Promo Code Discount</p>
                    <p>-$7.50</p>
                </div>
                <div className="shippingmethod">
                    <p>Shipping Method</p>
                    <p>UPS Ground 3-5 business day</p>
                </div>
                <div className="shippingfee">
                    <p>Shipping Fee</p>
                    <p>$0.00</p>
                </div>
                <div className="totalpayment">
                    <p>Total Payment</p>
                    <p>$42.49</p>
                </div>
                <button>
                    <span>Complete Order</span><img src={Lock} alt="" />
                </button>
                <p>All plans are no commitment, cancel anytime</p>
                <p className='moneyback'>100% Money Back Guarantee</p>
                <p>
                    If for any reason you are not completely satisfied with the number of reviews your business receives, cancel within the first 60 days by texting CARDCANCEL to 900900 or calling us at (800) 845-8928 and we will refund your money, no questions asked. By clicking "Complete Order” you agree to our <span className='termsandconditions'>Terms & Conditions</span>  and are enrolling in a recurring subscription that will continue until you cancel. You can cancel any time.
                </p>
            </div>

        </div>
    )
}

export default FormSec
