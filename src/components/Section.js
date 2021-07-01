import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Home} from '../pages/Home'
import {Buy} from '../pages/Buy'
import {Sold} from '../pages/Sold'
import {About} from '../pages/About'
import {BeastPage} from '../pages/BeastPage'
import {Parents} from '../pages/Parents'
import Context from '../context'
import SidebarBar from '../components/SidebarBar'

export default function Section(){
    const [beasts, setBeasts] = useState([])
    const [familyes, setFamilyes] = useState([])
    
    
    useEffect(()=>{
        fetch('https://fluffy-house-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/beasts.json')
            .then(res => res.json())
            .then(beasts => setBeasts(beasts))
        
        fetch('https://fluffy-house-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/familyes.json')
            .then(res => res.json())
            .then(familyes => setFamilyes(familyes))
        }, [])
    
    return (
        <section>
            <div className="container">
                <div className="section__inner">
                    <Context.Provider value={ { beasts, familyes } }>
                        <BrowserRouter>
                            <SidebarBar />  
                            <main>
                                <Switch>
                                    <Route path={'/'} exact component={Home} />
                                    <Route path={'/buy'} component={Buy} />
                                    <Route path={'/sold'} component={Sold} />
                                    <Route path={'/about'} component={About} />
                                    <Route path={'/parents'} component={Parents} />
                                    <Route path={'/:id'} component={BeastPage} />
                                </Switch>                     
                            </main>
                        </BrowserRouter>
                    </Context.Provider>
                </div>
            </div>
        </section>
    )
}