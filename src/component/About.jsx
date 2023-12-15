import React from 'react'
import '../css/about.css';
import myAboutImg from '../media/DSC_0410e.jpg';

export default function About() {
    return (
        <>
            <div className="container-about">
                <div className="title-about">About Me</div>
                <div className="about-image">
                    <div className="card-about">
                        <div className="content-about">
                            <img className='image-about' src={myAboutImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <p>My objective is to
                        apply and enhance my programming skills in a dynamic and practical setting. I am committed to make a positive impact while
                        learning and growing as a programmer. And I love programming, graphic design and photography. I enjoy creating poster design, logo design and video editing. I won't stop exploring many different new things.</p>
                </div>
            </div>
            <div className="container-skill">
                <div className="skills-subHead">What Skills I Have</div>
                <div className="skills-head">My Experience</div>
                <div className="skills-card">
                    <div className="skills-cat-card">
                        <div className="skills-categories">Forntend Development</div>
                        <div className="skills-type-card">
                            <div className="skills-types">
                                <div className="skills-name">HTML</div>
                                <div className="skills-lvl">Experienced</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">CSS</div>
                                <div className="skills-lvl">Experienced</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">JavaScript</div>
                                <div className="skills-lvl">Intermediate</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">Bootstrap</div>
                                <div className="skills-lvl">Experienced</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">React</div>
                                <div className="skills-lvl">Intermediate</div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-cat-card">
                        <div className="skills-categories">Backend Development</div>
                        <div className="skills-type-card">
                            <div className="skills-types">
                                <div className="skills-name">Java</div>
                                <div className="skills-lvl">Experienced</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">PHP</div>
                                <div className="skills-lvl">Intermediate</div>
                            </div>
                            <div className="skills-types">
                                <div className="skills-name">MySQL</div>
                                <div className="skills-lvl">Experienced</div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}
