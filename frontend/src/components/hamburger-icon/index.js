import React from 'react'
import './hamburger-icon.css'

export default class HamburgerIcon extends React.Component {
    static defaultProps = {
        onClick: () => {}
    };

    onClick = (e) => {
        e.currentTarget.classList.toggle('open');
        this.props.onClick(e);
    };

    render() {
        return (
            <div className="hamburger-icon"  onClick={this.onClick} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}