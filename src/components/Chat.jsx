import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ToshinIcon from '../assets/img/toshin-icon.jpg'


const Chat = ({text,type})=>{
    console.log(text)

    return(
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={ToshinIcon} />
        </ListItemAvatar>
            <div className="c-chat__bubble">{text}</div>
        </ListItem>
    )
}

export default Chat