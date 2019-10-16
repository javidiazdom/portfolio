import React, {useState} from 'react';
import './skills.css';
import {ReactComponent as Css} from './svg/bars/cs3-logo.svg';
import {ReactComponent as Html} from './svg/bars/html5-logo.svg';
import {ReactComponent as Java} from './svg/bars/java-logo.svg';
import {ReactComponent as Js} from './svg/bars/js-logo.svg';
import {ReactComponent as Python} from './svg/bars/python-logo.svg';
import {ReactComponent as ReactL} from './svg/bars/react-logo.svg';
import {ReactComponent as Angular} from './svg/bars/angular-logo.svg';
import {ReactComponent as Sql} from './svg/bars/sql-logo.svg';
import VisibilitySensor from 'react-visibility-sensor';
import {Spring} from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';

function Skills () {
    
    let skills = [
        {name : Css, progress : 40},
        {name : Html , progress : 50},
        {name : Java , progress : 70},
        {name : Js , progress : 30},
        {name : Python , progress : 20},
        {name : ReactL , progress : 30},
        {name : Angular , progress : 40},
        {name : Sql , progress : 40},
    ];
    
    return (
        <>
            <div align = "center">
                <h1>Skills</h1>
            </div>
            <div className ="content">
                <div className = "me-container">
                    <Me/>
                </div>
                {/*<div className ="me">
                    <div className = "me-container">
                        <img src = {require('./svg/face.jpg')} alt = "Javier Diaz Dominguez" className = "photo"/>
                        
                    </div>
                </div>*/}
                <div className ="bars">
                    {skills.map((item,index) => <Item key = {index} item = {item}/>)}
                </div>
            </div>
        </>
    );
}

function Me () {
    const [flipped,set] = useState(false);
    const { transform, opacity } = useSpring ({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: {mass : 5, tension : 500 , friction: 80}
    })

    return (
        <div className = "out-div" onClick = {() => set(state => !state)}>
            <animated.div className = "me back" style={{opacity: opacity.interpolate(o => 1-o), transform}} >
                <div className = "text">
                    <h2>Who am I?</h2>
                    <h4>I’m a curious and creative developer who is really thirsty for knowledge and new things. I always consider to have a lot to learn in every subject that I get involved.</h4>
                </div>
            </animated.div>
            <animated.div className = "me front" style={{opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}} />
        </div>
    )
}

function Item (props) {
    let Item = props.item;
    let Tag = props.item.name;
    const [state, toggle] = useState(true);
    const propts = useSpring({width: state ? Item.progress+'%' : '0%', from: {width: '0%'}})
    return (
        <>
<<<<<<< HEAD
            <div className="bar-precont">
                <div className="bar-container">
                    <div className = "bar">
                        <VisibilitySensor partialVisibility ={true} onChange={() => toggle(!state)}>
=======
            <VisibilitySensor onChange={() => toggle(!state)}>
                <div className="bar-precont">
                    <div className="bar-container">
                        <div className = "logo">
                            <Tag/>
                        </div>
                        <div className = "bar">
>>>>>>> parent of 20fc21f... Improoved the looks of the bars and added anim
                            <div className = "bar-back">
                                <animated.div className = "progress" style={propts}></animated.div>
                            </div>
                        </VisibilitySensor>
                    </div>
                    <p>{Item.progress}%</p>
                </div>
            </div>
        </>
    );
}

export default Skills;