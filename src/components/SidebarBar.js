import React from 'react'
import {NavLink} from 'react-router-dom'


export default function SidebarBar(){
    return (
        <sidebar>
            <nav>
                <NavLink className="nav__link" activeClassName="nav__selected" exact to="/">Котята</NavLink>
                <NavLink className="nav__sub-link" activeClassName="nav__selected" to="/buy">Купить</NavLink>
                <NavLink className="nav__sub-link" activeClassName="nav__selected" to="/sold">Выпускники</NavLink>
                <NavLink className="nav__link" activeClassName="nav__selected" to="/parents">Производители</NavLink>
                <NavLink className="nav__link" activeClassName="nav__selected" to="/about">О нас</NavLink>
            </nav>
        </sidebar>
    )
}