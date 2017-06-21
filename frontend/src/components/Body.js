import React from 'react';
import {scrollTo} from '../utils/index.js';

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <h2 className="font font-size heading-block heading-block--main">
                        Hello, my name is Stas.
                        I am a Junior Web Developer
                        living in Everett, WA.
                    </h2>
                </section>
                <div className="img"></div>
                <div className="border-bottom margin-top ">
                <div className="centered">
                    <h4 className="text-align-center">About:</h4>
                    <div className="font font-size-one padding-bottom">Currently, I am seeking
                        a position in the web development industry. I am refining my skills using
                        various online resources included, but not limited to
                        <a target="_blank" href="https://www.coursera.org"> Coursera</a>,
                        <a target="_blank" href="https://www.freecodecamp.com/stasvitvitskiy"> Free Code Camp</a>.
                        These platforms allow my expertise to grow with my passion.
                        In order to support my dream, I work as a medical interpreter.
                        I am <a target="_blank"
                            href="https://www.dshs.wa.gov/fsa/language-testing-and-certification-program">
                            DSHS</a> certified bilingual, in English and Russian.
                        I will be a great addition to your company
                        because I am a dynamic problem-solver with a drive to build
                        innovative solutions. I am adaptive, inquisitive, creative, and
                        have a strong passion for learning new technologies.
                        If you have any questions about my background,
                        please do not hesitate to reach out to me!
                        <a onClick={() => scrollTo(document.body,1200,600)}> Indulge</a> my passion and lets discuss possible opportunities!
                    </div>
                </div>
            </div>
                <div className="border-bottom margin-top">
                <div className="centered">
                    <h4 className="text-align-center">Services:</h4>
                    <h6 className="text-align-center color-yellow">WEB DEVELOPMENT</h6>
                    <div className="font font-size-one padding-bottom">Web Development is building
                        out the visual components of a website.
                        Using HTML, CSS , Javascript, customer-centric approach, and ability
                        to emphathize with the clients' needs and wants, I build fast,
                        interactive websites using modern web technologies.
                    </div>
                </div>
            </div>
                <div className="border-bottom content-block">
                <div>
                    <h1 className="centered heading-block font">
                        Interested in doing a
                        project together?
                    </h1>
                        <a className="button" href="mailto:stanislav.i.vitvitskiy@gmail.com">Email Me
                            <span> &#10002;</span>
                        </a>
                </div>
            </div>
            </div>
        )
    }
}