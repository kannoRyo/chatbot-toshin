import React from 'react'
import {Chat} from './index'

import List from '@material-ui/core/List';

const Chats = ({chats})=>{
    return(
        <List>
            {
                chats.map((chat,index)=>{
                   return  <Chat text={chat.text} type={chat.type}key={index}/>
                })
            }
        </List>
    )
}

export default Chats