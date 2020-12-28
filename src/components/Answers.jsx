import React from 'react'
import {Answer} from './index'

const Answers = ({answers,selectAnswer})=>{

    return(
        <div className="c-grid__answer">
            {
                answers.map((answer,index)=>{
                    return <Answer content={answer.content} selectAnswer={selectAnswer} nextId={answer.nextId} key={index}/>
                })
            }
        </div>
    )
}

export default Answers