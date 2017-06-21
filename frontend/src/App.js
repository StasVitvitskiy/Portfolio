import React, {Component} from 'react';
import './App.css';
import './animate.css';
//import './animate.js';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Header />
                    <Body />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
