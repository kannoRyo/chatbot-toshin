import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {examinations} from './ExamFormPart'

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const ExamMenu = ({menuOpen,handleMenuToogle,value,handleMenuChange,label,menus,style})=>{
    const classes = useStyles();
    return(
        <>
            <FormControl className={classes.formControl} style={style}>
                <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={menuOpen}
                onClose={handleMenuToogle}
                onOpen={handleMenuToogle}
                value={value}
                onChange={handleMenuChange}
                >
                {
                    menus.map((menu,i)=>{
                    return <MenuItem value={menu} key={i}>{menu}</MenuItem> 
                    })
                }
                </Select>
            </FormControl>
        </>
    )
}

export default ExamMenu