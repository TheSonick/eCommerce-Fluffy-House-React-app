import React, {useContext} from 'react'
import MainBlock from '../components/MainBlock'
import Context from '../context'

export const Home = ()=>{
    const {beasts, familyes} = useContext(Context)
    familyes.sort(function(a, b) {
      return b.id - a.id;
    })
    
    return (
        <>
            {beasts.length && familyes.length 
                ? <MainBlock beasts={beasts} familyes={familyes}/> 
                : <div className="lds-dual-ring"></div>}
        </>
    )
}