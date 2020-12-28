import React from 'react'
import {Chat} from './index'

import {List,makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    listGgrid:{
        height:'462px'
    }
})

const Chats = ({chats})=>{
    const classes = useStyle()

    return(
        <List  className={classes.listGgrid}>
            {
                chats.map((chat,index)=>{
                   return  <Chat text={chat.text} type={chat.type}key={index}/>
                })
            }
        </List>
    )
}

export default Chats