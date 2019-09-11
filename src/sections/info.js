import React from 'react';
import './info.css';
import {ReactComponent as Intlogo} from './svg/interests.svg';
import {ReactComponent as Aboutlogo} from './svg/about.svg';
import {ReactComponent as Educationlogo} from './svg/education.svg';
import {ReactComponent as Ulpgclogo} from './svg/ulpgc.svg';
import {ReactComponent as Auralogo} from './svg/aura.svg';
import 'aos/dist/aos.css';

function Info () {
    return (
        <>
            <div className = "info-container">
                <Content/>
            </div>
        </>
    );
}

function Content () {
    return (
        <>
            <div className = "content-container">
                <div className = "square" data-aos = "fade-right" 
                data-aos-duration = "300" data-anchor-placement ="center-bottom">
                    <div align = "center" data-aos ="flip-right" data-aos-duration = "300">
                        <Aboutlogo/>
                    </div>
                    <h2>About me</h2>
                    <div className = "under"/>
                    <h3>I’m currently studying<br/>computer engineering<br/>at the university of<br/>Las Palmas de<br/>Gran Canaria.
                    </h3>
                </div>
                <div className = "square" data-aos ="fade" data-aos-duration = "300" data-anchor-placement ="center-bottom">
                    <div align = "center" data-aos ="flip-up" data-aos-duration = "300">
                        <Intlogo/>
                    </div>
                    <h2>My interests</h2>
                    <div className="under"/>
                    <h3>I’m really interested<br/>in web design, specially<br/>back and front end<br/>development.<br/>Also deep learning and<br/> big data solutions<br/>arouse my interest.</h3>
                </div>
                <div className = "square" data-aos ="fade-left" data-aos-duration = "300" data-anchor-placement ="center-bottom">
                    <div align = "center" data-aos ="flip-left" data-aos-duration = "300">
                        <Educationlogo/>
                    </div>
                    <h2>Education</h2>
                    <div className="under" align = "center"/>
                    <br/>
                    <a href="https://www.ulpgc.es/" target="_blank" rel="noopener noreferrer">
                        <div className = "data">
                            <div className = "data-logo-container">
                                <Ulpgclogo className = "data-logo"/>
                            </div>
                            <div className = "infor">
                                <h3>ULPGC</h3>
                                <h4>Computer engineering </h4>
                                <p>2017-2021</p>
                            </div>
                        </div>
                    </a>
                    <br/>
                    <a href = "https://www.auraformacion.es/" target="_blank" rel="noopener noreferrer">
                        <div className = "data">
                            <div className = "data-logo-container">
                                <Auralogo className = "data-logo"/>
                            </div>
                            <div className = "infor">
                                <h3>AURA Business<br/>training center</h3>
                                <h4>Analysis and management <br/>of Information in Big Data <br/>environments</h4>
                                <p>2017-2021</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}


export default Info;