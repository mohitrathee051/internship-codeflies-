import React from 'react'
import './NavBar.css'
import cancel from '../assets/cancel.png'

function Page1() {
    return (
        <div className='first'>
            <div className="alertBox">
                <p className="alertHead">Hurry up! Our promoted price will be ended in October 31, 2021</p>
                <div className="alertContent">
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<p>totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</p>
                    </p>
                    <img src={cancel} alt="" />
                </div>
                <div className="refillcards">
                    <p className='refillhead'>Refill Your Cards</p>
                    <p className='refillcontent'>Mauris in aliquam interdum in viverra. Parturient sollicitudin quis elit phasellus at placerat. Elit at pharetra, varius id consequat ut praesent ornare.</p>
                </div>

            </div>

        </div>
    )
}

export default Page1
