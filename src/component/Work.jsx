import React from 'react'
import '../css/work.css';

export default function Work() {

    const chitraGharSorceCode = () => {
        window.open('https://github.com/newasandy/chitraghar_project', '_blank');
    };
    const textAndQrSorceCode = () => {
        window.open('https://github.com/newasandy/TextModifiction-and-QRGenerator', '_blank');
    };
    const personalPorifolioSorceCode = () => {
        window.open('https://github.com/newasandy/sandy-portfolio', '_blank');
    };
    const textAndQrLive = () => {
        window.open('https://newasandy.github.io/TextModifiction-and-QRGenerator/', '_blank');
    };
    const personalPorifolioLive = () => {
        window.open('http://sandiprajbhandari.com.np', '_blank');
    };

    return (
        <>

            <div className="container-work">
                <div className="row-work">
                    <div className="work-name">Project</div>
                    <div className="project-view">
                        <div className="card">
                            <div className="project-name">ChitraGhar:Web Art Gallery Application</div>
                            <div className="card__content">
                                <p className="card__description">Chitraghar:Web Art Gallery Application is a web application, which will be used to
                                    display art works of artists irrespective of their nationality, gender and other narrow
                                    considerations, through this platform.</p>
                                <button className="card__button secondary" onClick={chitraGharSorceCode}>Source Code</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="project-name">Text Modification and QR Generator</div>
                            <div className="card__content">
                                <p className="card__description">The Text Modification and QR Generator Web Application is a versatile tool to manipulating text content and generate the QR code.</p>
                                <button className="card__button" onClick={textAndQrLive}>Live Demo</button>
                                <button className="card__button secondary" onClick={textAndQrSorceCode}>Source Code</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="project-name">Personal Portfolio Wibsite</div>
                            <div className="card__content">
                                <p className="card__description"></p>
                                <button className="card__button" onClick={personalPorifolioLive}>Live Demo</button>
                                <button className="card__button secondary" onClick={personalPorifolioSorceCode}>Source Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-service">
                <div className="service-head">Services</div>
                <div className="seivice-holder">
                    <div className="service-card">
                        <div className="service-name">Graphic Design</div>
                    </div>
                    <div className="service-card">
                        <div className="service-name">Web Development</div>
                    </div>
                    <div className="service-card">
                        <div className="service-name">Video Editing</div>
                    </div>
                </div>
            </div>

        </>
    )
}
