import React from 'react';
import Logo from '../Assets/—Pngtree—movie clapper film_2497117 (1).png';
import Png from '../Assets/Lan Wangji Chibi - Afterbyun (7).png'
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <Link to={'/'}>
                    <img className={'logo'} src={Logo} alt=""/>
                    <img className={'logo'} src={Png} alt=""/>
                </Link>
                <div className={'nav'}>
                <Link to={'/'} className="nav-link active" aria-current="page" >Home</Link>
                    <Link to={'/search'} className="nav-link">Search</Link>
                    <Link to={'/top'} className="nav-link active" aria-disabled="true">Top</Link>
                    <Link to={'/upcoming'} className="nav-link">Upcoming</Link>
                    <Link to={'/popular-people'} className="nav-link">Popular people</Link>
                    <Link to={'/tvseries'} className="nav-link">TV series</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;