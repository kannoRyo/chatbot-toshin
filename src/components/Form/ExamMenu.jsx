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

const ExamMenu = ({menuOpen,handleMenuToogle,examination,handleMenuChange})=>{
    const classes = useStyles();
    return(
        <>
            <FormControl className={classes.formControl} style={{width:'100%', margin:'0'}}>
                <InputLabel id="demo-controlled-open-select-label">模試名</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={menuOpen}
                onClose={handleMenuToogle}
                onOpen={handleMenuToogle}
                value={examination}
                onChange={handleMenuChange}
                >
                <MenuItem value="">
                    <em>模試を選択する</em>
                </MenuItem>
                {
                    examinations.map((exam)=>{
                    return <MenuItem value={exam} >{exam}</MenuItem>
                    })
                }
                </Select>
            </FormControl>
        </>
    )
}

export default ExamMenu