import React from 'react';

export default class SVG extends React.Component {
    render() {
        return (
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
	            width={this.props.width+'px'}
                height={this.props.height+'px'}
                viewBox={this.props.viewBox}
                style={this.props.style}
                className={this.props.className}
            >
                <path d={this.props.path} fill="currentColor"/>
            </svg>
        )
    }
}