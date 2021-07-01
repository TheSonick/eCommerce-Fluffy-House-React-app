import React, {useContext} from 'react'
import ParentItem from '../components/ParentItem'
import Context from '../context'

export const Parents = ()=>{
    const {beasts} = useContext(Context)
    
    const parents = beasts.filter(beast => beast.isParent)
                                          
    return (
        <>{parents.map( beast => {
            return <ParentItem beast={beast} key={beast.id}/>
        })}</>
    )
}