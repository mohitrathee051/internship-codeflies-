import React from 'react'
import midimg from '../assets/midimg.png'
import midimgrectangle from '../assets/midimgrectangle.png'
import './NavBar.css'



function Page1End() {
    return (
        <div className='page1foot'>
            <div className="leftpage1">
                <p>Keep getting</p>
                <p>more reviews</p>
            </div>
            <div className="midpage1">
                <div className="bgimagee">
                    <img src={midimg} alt="" />
                </div>
                <div className="topimagee">
                    <img src={midimgrectangle} alt="" />
                </div>
            </div>
            <div className="rightpage1">
                <p>and stay their</p>
                <p className='stayfoot'>top choice</p>
            </div>
        </div>
    )
}

export default Page1End
