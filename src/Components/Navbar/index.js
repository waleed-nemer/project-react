import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import './style.css';

const Navbar = () =>  {
        return (
            <div>
               <Link to="/"> Home </Link> 
               <Link to="/contact"> Contact </Link> 
            </div>
        )
}
export default Navbar;

