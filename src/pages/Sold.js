import React, {useContext} from 'react'
import MainBlock from '../components/MainBlock'
import Context from '../context'

export const Sold = ()=>{
    const {beasts, familyes} = useContext(Context)
    const familyesClone = JSON.parse(JSON.stringify(familyes))
    
    const soldBeasts = beasts.filter(beast => beast.isKitten?.status === 'sold')
    const soldBeastsIds = soldBeasts.map(beast=>beast.id)                                    
    let soldFamilyes = []
                                          
    soldBeasts.map( beast => soldFamilyes.push( ...familyesClone.filter( family => family.id === beast.isKitten.familyId ) ) )
                                          
    soldFamilyes = Array.from( new Set( soldFamilyes ) )
    
    soldFamilyes.map(family=>{
        return family.childs = family.childs.filter(child=> soldBeastsIds.includes(child))
        })                      
                                          
    return (
        <>
            {beasts.length && familyes.length 
                ? <MainBlock beasts={beasts} familyes={soldFamilyes}/> 
                : <div className="lds-dual-ring"></div>}
        </>
    )
}