import React, {useContext} from 'react'
import MainBlock from '../components/MainBlock'
import Context from '../context'

export const Buy = ()=>{
    const {beasts, familyes} = useContext(Context)
    const familyesClone = JSON.parse(JSON.stringify(familyes))
    
    const avaliableBeasts = beasts.filter(beast => beast.isKitten?.status.hasOwnProperty('avaliable'))
    const avaliableBeastsIds = avaliableBeasts.map(beast=>beast.id)                                    
    let avaliableFamilyes = []
                                          
    avaliableBeasts.map( beast => avaliableFamilyes.push( ...familyesClone.filter( family => family.id === beast.isKitten.familyId ) ) )
                                          
    avaliableFamilyes = Array.from( new Set( avaliableFamilyes ) )
    
    avaliableFamilyes.map(family => family.childs = family.childs.filter(child=> avaliableBeastsIds.includes(child)))                      
                                          
    return (
        <>
            {beasts.length && familyes.length 
                ? <MainBlock beasts={beasts} familyes={avaliableFamilyes}/> 
                : <div className="lds-dual-ring"></div>}
        </>
    )
}