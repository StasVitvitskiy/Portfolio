import React from 'react';
import classNames from 'classnames';
import GitHubLogoPath from './github-logo.path';
import FacebookLogoPath from './facebook-logo.path';
import SVG from './SVG';
import {scrollTo} from '../utils/index.js';
import HamburgerIcon from './hamburger-icon'

export default class Header extends React.Component {
    state = {
        svClassName: '',
        showMedia: false,
        hasMobileMenu: false
    };

    onFrameEnter = () => {
        this.setState({
            svClassName: 'frame_sv__border--enter'
        })
    };

    onFrameLeave = () => {
        this.setState({
            svClassName: 'frame_sv__border--leave'
        });
    };

    onFrameAnimationEnd = () => {
        this.setState({
            svClassName: ''
        });
    };

    toggleShowMedia = () => {
        this.setState({
            showMedia: !this.state.showMedia
        });
    };
    onNavItemMouseEnter = (e) => {
        e.currentTarget.classList.add('animated', 'rubberBand')
    };
    onNavElementAnimationEnd = (e) => {
        e.currentTarget.classList.remove('animated','rubberBand')
    };

    toggleMobileMenu = () => {
        this.setState({
            hasMobileMenu: !this.state.hasMobileMenu
        })
    };

    render() {
        return (
            <nav className="header">
                <div className="frame_sv"
                    onMouseEnter={this.onFrameEnter}
                    onMouseLeave={this.onFrameLeave}
                >
                    <div
                        className={'frame_sv__border '+this.state.svClassName}
                        onAnimationEnd={this.onFrameAnimationEnd}
                    />
                    <a href="" className="frame_sv__link">SV</a>
                </div>
                <div className="header__menu-trigger">
                    <div>
                        menu
                    </div>
                    <HamburgerIcon onClick={this.toggleMobileMenu} />
                </div>
                <ul
                    className={classNames({
                        'header__mobile-menu': true,
                        'header__mobile-menu--open': this.state.hasMobileMenu
                    })}
                >
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li
                        onClick={() => scrollTo(document.body, 1007, 600)}
                    >
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://github.com/StasVitvitskiy"
                        >
                            <SVG className="cursor"
                                 width="13"
                                 height="15"
                                 viewBox="0 0 35.318 35.318"
                                 path={GitHubLogoPath}
                            />
                            &nbsp;-
                            Github
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            href="https://www.facebook.com/stas.vitvickii"
                        >
                            <SVG className="cursor"
                                 width="13"
                                 height="15"
                                 viewBox="0 0 90 90"
                                 path={FacebookLogoPath}
                            />
                            &nbsp;-
                            Facebook
                        </a>
                    </li>
                </ul>
                <ul className="header__menu" >
                    <li
                        onMouseEnter={this.onNavItemMouseEnter}
                        onAnimationEnd={this.onNavElementAnimationEnd}
                    >
                        <a href="/">Home</a>
                    </li>
                    <li
                        onMouseEnter={this.onNavItemMouseEnter}
                        onAnimationEnd={this.onNavElementAnimationEnd}
                        onClick={() => scrollTo(document.body,500,600)}
                    >
                        About
                    </li>
                    <li
                        onClick={this.toggleShowMedia}
                        onMouseEnter={this.onNavItemMouseEnter}
                        onAnimationEnd={this.onNavElementAnimationEnd}
                    >
                        Social
                    </li>
                </ul>
                <div
                    className={classNames({
                        'header__media': true,
                        'header__media--open': this.state.showMedia
                    })}
                >
                    <a
                        target="_blank"
                        href="https://github.com/StasVitvitskiy"
                    >
                        <SVG className="cursor"
                            width="13"
                            height="15"
                            viewBox="0 0 35.318 35.318"
                            path={GitHubLogoPath}
                        />
                    </a>
                    <a
                        target="_blank"
                        className="margin"
                        href="https://www.facebook.com/stas.vitvickii"
                    >
                        <SVG className="cursor"
                            width="13"
                            height="15"
                            viewBox="0 0 90 90"
                            path={FacebookLogoPath}
                        />
                    </a>
                </div>
            </nav>
        )
    }
}