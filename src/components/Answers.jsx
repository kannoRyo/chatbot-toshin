import React from 'react'
import {Answer} from './index'

const Answers = ({answers})=>{

    return(
        <div className="c-grid__answer">
            {
                answers.map((answer,index)=>{
                    return <Answer content={answer.content} key={index}/>
                })
            }
        </div>
    )
}

export default Answers