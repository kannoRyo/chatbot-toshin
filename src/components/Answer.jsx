import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    button:{
        marginBottom:'8px',
        padding:'8.5px',
        fontWeight:'600',
        border:'1px solid #92b2e0',
        '&:hover':{
            backgroundColor:"#92b2e0",
            color:"#fff"
        }
    }
})


const Answer = ({content,selectAnswer,nextId})=>{
    const classes = useStyle()
    return(
        <Button variant="outlined" className={classes.button} onClick={()=>selectAnswer(content,nextId)}>{content}</Button>
    )
}

export default Answer