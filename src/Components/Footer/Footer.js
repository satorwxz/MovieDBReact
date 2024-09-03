import React from 'react';
import Logo from '../Assets/—Pngtree—movie clapper film_2497117 (1).png';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <Link to={'/'}>
                <img className={'logo'} src={Logo} alt=""/>
            </Link>
        </footer>
    );
};

export default Footer;