import React from 'react';
import logo from './logo.svg';
import {scrollTo} from '../utils/index.js';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="App-footer margin-top">
                <h5 className="flex">Made by <span className="margin-per">
                <span onClick={() => scrollTo(document.body,0,600)} className="color-grey">SV</span></span>
                    using<img src={logo} className="App-logo" alt="logo" /> 2017
                </h5>
            </div>
        )
    }
}