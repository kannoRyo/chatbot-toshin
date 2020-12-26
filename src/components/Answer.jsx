import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    button:{
        marginBottom:'8px',
        padding:'10px',
        fontWeight:'600',
        border:'1px solid #60cfd2',
        '&:hover':{
            backgroundColor:"#60cfd2",
            color:"#fff"
        }
    }
})


const Answer = ({content})=>{
    const classes = useStyle()
    return(
        <Button variant="outlined" className={classes.button}>{content}</Button>
    )
}

export default Answer