import React from 'react';
import './skills.css';
import {ReactComponent as Css} from './svg/bars/cs3-logo.svg';
import {ReactComponent as Html} from './svg/bars/html5-logo.svg';
import {ReactComponent as Java} from './svg/bars/java-logo.svg';
import {ReactComponent as Js} from './svg/bars/js-logo.svg';
import {ReactComponent as Python} from './svg/bars/python-logo.svg';
import {ReactComponent as ReactL} from './svg/bars/react-logo.svg';
import {ReactComponent as Angular} from './svg/bars/angular-logo.svg';
import {ReactComponent as Sql} from './svg/bars/sql-logo.svg';
import {Spring, config} from 'react-spring/renderprops';

function Skills () {
    
    return (
        <>
            <div align = "center">
                <h1>Skills</h1>
            </div>
            <div className ="content">
                <div className ="me">
                    <div className = "me-container">
                        <img src = {require('./svg/face.jpg')} alt = "Javier Diaz Dominguez" className = "photo"/>
                        <h2>Who am I?</h2>
                        <div className ="p-container">
                            <h4>I’m a curious and creative developer who is really thirsty for knowledge and new things. I always consider to have a lot to learn in every subject that I get involved.</h4>
                        </div>
                    </div>
                </div>
                <div className ="bars">
                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Css></Css>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                    <div onWheel={(e)=>console.log("hey",e)}>
                                        <div className = "progress" style={{width:'40%'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>40%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Html></Html>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                    <div className = "progress" style={{width:'50%'}}/>
                                </div>
                            </div>
                        </div>
                        <p>50%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Java></Java>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                    <div className = "progress" style={{width:'70%'}}/>
                                </div>
                            </div>
                        </div>
                        <p>70%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Js></Js>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                    <Spring
                                    from = {{number : 0}}
                                    to={{number: 30}}>
                                        {props => <div className = "progress" style={{width: props.number+'%'}}/>}
                                    </Spring>
                                </div>
                            </div>
                        </div>
                        <p>30%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                            <Python></Python>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                <Spring
                                    from = {{number : 0}}
                                    to={{number: 20}}>
                                        {props => <div className = "progress" style={{width: props.number+'%'}}/>}
                                    </Spring>
                                </div>
                            </div>
                        </div>
                        <p>20%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <ReactL></ReactL>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                <Spring
                                    from = {{number : 0}}
                                    to={{number: 30}}>
                                        {props => <div className = "progress" style={{width: props.number+'%'}}/>}
                                    </Spring>
                                </div>
                            </div>
                        </div>
                        <p>30%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Angular></Angular>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                <Spring
                                    from = {{number : 0}}
                                    to={{number: 40}}>
                                        {props => <div className = "progress" style={{width: props.number+'%'}}/>}
                                    </Spring>
                                </div>
                            </div>
                        </div>
                        <p>40%</p>
                    </div>

                    <div className="bar-precont">
                        <div className="bar-container">
                            <div className = "logo">
                                <Sql></Sql>
                            </div>
                            <div className = "bar">
                                <div className = "bar-back">
                                <Spring
                                    from = {{number : 0}}
                                    to={{number: 40}}>
                                        {props => <div className = "progress" style={{width: props.number+'%'}}/>}
                                    </Spring>
                                </div>
                            </div>
                        </div>
                        <p>40%</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;