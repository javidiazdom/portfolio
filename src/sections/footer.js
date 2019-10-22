import React from 'react';
import './footer.css';
import {ReactComponent as LinkedIn} from './svg/linked-in.svg';
import {ReactComponent as Gmail} from './svg/gmail.svg';
import {ReactComponent as Instagram} from './svg/instagram.svg';
import {ReactComponent as Twitter} from './svg/twitter.svg';


function Footer() {
    return (
        <>
            <div className = "container">
                <div className = "rss">
                    <a href="https://www.linkedin.com/in/javier-d%C3%ADaz-dom%C3%ADnguez-b2a653192/" target="_blank" rel="noopener noreferrer">
                        <div className = "logo-footer" ><LinkedIn/></div>
                    </a>
                    <a href="mailto:javidiazdom@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className = "logo-footer"><Gmail/></div>
                    </a>
                    <div className = "logo-footer"><Instagram/></div>
                    <div className = "logo-footer"><Twitter/></div>
                </div>
            </div>
        </>
    );
}

export default Footer;