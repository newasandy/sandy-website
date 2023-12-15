import React from 'react'
import '../css/photography.css';
import Photo1 from '../media/photography/1.jpg';
import Photo2 from '../media/photography/2.jpg';
import Photo3 from '../media/photography/3.jpg';
import Photo4 from '../media/photography/4.jpg';
import Photo5 from '../media/photography/5.jpg';
import Photo6 from '../media/photography/6.jpg';
export default function Photography() {
    return (
        <>
            <div className="container-photograph">
                <div className="head-name">Photography</div>
                <div className="photo-holder">
                    <div className="photo-card">
                        <img className='photo' src={Photo1} alt="" />
                    </div>
                    <div className="photo-card">
                        <img className='photo' src={Photo2} alt="" />
                    </div>
                    <div className="photo-card">
                        <img className='photo' src={Photo3} alt="" />
                    </div>
                    <div className="photo-card">
                        <img className='photo' src={Photo4} alt="" />
                    </div>
                    <div className="photo-card">
                        <img className='photo' src={Photo5} alt="" />
                    </div>
                    <div className="photo-card">
                        <img className='photo' src={Photo6} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
