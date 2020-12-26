import React , {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Index from './Components/Index';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                 <Navbar />
                 <Route exact path="/" component={Index} />
                 <Route path="/Contact" component={Contact} />
            </BrowserRouter>
        )
    }
}
export default App;