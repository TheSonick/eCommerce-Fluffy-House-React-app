import React from 'react'
import logo from '../logo.png'
import Contacts from './Contacts'
import Cart from './Cart'

export default function Header(){
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <a href="/">
                            <img src={logo} alt="logo"/>
                        </a>
                    </div>
                    <Contacts />
                    <Cart />
                </div>
            </div>
        </header>
    )
}