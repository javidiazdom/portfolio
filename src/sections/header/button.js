import React from 'react';
import './button.css';

export default class Button extends React.Component{
    constructor () {
        super();
        this.state = {isCheked : false};
        this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked () {
        if (this.state.isCheked) {
            document.documentElement.setAttribute('data-theme','dark');
        } else {
            document.documentElement.setAttribute('data-theme','light');
        }
        console.log(document.documentElement.getAttribute('data-theme'))
        this.setState({isCheked : !this.state.isCheked});
    }

    render() {
        return (
            <label className="switch">
                <input type="checkbox" onChange = {this.handleChecked}></input>
                <span className="slider"></span>
            </label>
        );
    }
}