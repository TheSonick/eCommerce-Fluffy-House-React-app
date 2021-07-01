import React from 'react'
import ParentsBlock from './ParentsBlock'
import ChildsBlock from './ChildsBlock'

export default function MainBlock({beasts, familyes}){
    familyes.sort(function(a, b) {
      return b.id - a.id;
    })
    
    return (<> 
                {familyes.map((family, i) => {
                        const [dad] = [...beasts.filter(beast => beast.id === family.dad)]
                        const [mom] = [...beasts.filter(beast => beast.id === family.mom)]
                        const childs = family.childs
                        return (<>
                                    <ParentsBlock dad={dad} mom={mom} key={family.id}/>
                                    <ChildsBlock beasts={beasts} childs={childs} key={i+10}/>
                                </>
                        )
                    })
                }
            </>
    )
}