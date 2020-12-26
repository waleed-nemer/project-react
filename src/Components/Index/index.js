import React , {Component} from 'react';
import './style.css';

import Home from './../Home';
import Work from './../Work';
import Protfolio from './../Protfolio';
import Profile from './../Profile';
import About from './../About';
import SocialMedia from './../SocialMedia';
import Footer from './../Footer';

class Index extends Component {
    render() {
        return (
            <div>
               <Home />
               <Work />
               <Protfolio />
               <Profile />
               <About />
               <SocialMedia />
               <Footer />
            </div>
        )
    }
}
export default Index;
