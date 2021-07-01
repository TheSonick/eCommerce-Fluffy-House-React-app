import React from 'react'
import Contacts from './Contacts'

export default function Footer(){
    return (<footer>
                <div className="container">
                    <div className="footer-inner">
                        <Contacts />
                    </div>
                    <div className="copyright">
                        <span>© Питомник «Fluffy House». Ukraine 2021</span>
                    </div>
                </div>
            </footer>
            )
}