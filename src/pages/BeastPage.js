import React, {useContext} from 'react'
import Beast from '../components/Beast'
import ChildsBlock from '../components/ChildsBlock'
import ParentsBlock from '../components/ParentsBlock'
import Context from '../context'

export const BeastPage = (props)=>{
    const {beasts, familyes} = useContext(Context)
    const id = props.match.params.id
    const beast = {...getBeastItem(id)}
    
    function getBeastItem(id) {
        const [beast] = beasts.filter(beast => beast.id === id)
        return beast
    }
    if (beast.isKitten){
        const dad = {...getBeastItem(beast.isKitten.dad)}
        const mom = {...getBeastItem(beast.isKitten.mom)}
        const [kittenFamily] = [...familyes.filter(family => family.id === beast.isKitten.familyId)]
        const kittenFamilyChilds = [...kittenFamily.childs.filter(child => child !== beast.id)]
              
       return (
            <>
                <ParentsBlock dad={dad} mom={mom} />
                <Beast beast={beast}/>
                <ChildsBlock beasts={beasts} childs={kittenFamilyChilds}/>
            </>
        ) 
    }
    
    if (beast.isParent){
        const beastFamilyes = familyes.filter(family => family.dad === beast.id || family.mom === beast.id)
        const beastChilds = []
        beastFamilyes.map(bFamily => beastChilds.push(...bFamily.childs))
        beastChilds.sort( ( a, b ) => b - a )
        return (
            <>
                <Beast beast={beast}/>
                <ChildsBlock beasts={beasts} childs={beastChilds}/>
            </>
        )
        
    }
    
    return(
        <></>
    ) 
}