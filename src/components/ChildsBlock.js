import React from 'react'
import Child from './Child'

export default function ChildsBlock({childs, beasts}){
    return(
        <>
           {childs.map(childId => {
                    const [child] = [...beasts.filter(beast => beast.id === childId)]
                    return <Child beast={child} key={child.id}/>
                })
            } 
        </>
    )
}