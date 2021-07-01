import React from 'react'

export default function Bunner(){
    return (<div className="bunner">
                <div className="container">
                    <img className="bunner__item" src={require('../images/banner.jpg').default} alt="bunner"/>
                </div>
            </div>
           )
}