import React from 'react'
import Parent from './Parent'


export default function ParentsBlock({dad,mom}){
    if(dad){
        return(<div className="preview-block">
                    <Parent beast={dad}/>
                    <Parent beast={mom}/>
                </div>)
    } else {
        return(<span className="preview__space"></span>)
    }
}