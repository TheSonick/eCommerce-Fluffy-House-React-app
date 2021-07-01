import React from 'react'
import $ from './Modal'

export default function Contacts(){
    
    
    return (<div className="header__contacts contacts">
                <div className="contacts__socials socials">
                    <a className="socials__link" href="https://www.facebook.com/people/Мария-Муравенко/100013462991819" target="blank">
                        <i className="fab fa-facebook-f"></i></a>
                    <a className="socials__link" href="https://www.instagram.com/muravenkomariia/" target="blank">
                        <i className="fab fa-instagram"></i></a>
                    <div className="socials__callback callback" onClick={()=>$.modal().open()}>
                        <div className="callback-btn"><i className="fas fa-phone"></i></div>
                        <div className="callback-title">Заказать звонок</div>
                    </div>
                </div>
                <div className="contacts__phones">
                    +38(066)777-15-15<br/>
                    +38(095)166-16-66
                </div>
            </div>
            )
}