import React from 'react';
import header_logo from '../assets/icon/logo.png'

function Header() {
    return (
        <header>
            <img className="header__logo" src={header_logo} />
            <h1 className="header__title">Weather Channel</h1>
        </header>
    )
}

export default Header;