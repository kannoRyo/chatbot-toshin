import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const dayjs = require('dayjs')

const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    displayNone: {
        display:'none'
    },
    datePickerBoard:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        padding:'15px',
        borderRadius:'8px',
        backgroundColor:'#d7dadb'
    }
  }));

const DatePickers = ({date,handleDateChange,dateOpen,handleClickDateToogle})=> {
    const classes = useStyles();
    const isDisplay = (dateOpen) ? '' : classes.displayNone
  return (
      <div className={isDisplay}>　
        <div className={classes.datePickerBoard}>
            <h2>お調べしたい日付を選択してください</h2>
            <TextField
                id="date"
                label="Date"
                type="date"
                value={date}
                className={classes.textField}
                onChange={handleDateChange}
                InputLabelProps={{
                shrink: true,
                }}
            />
            {/* <Button variant="contained" color="primary">送信する</Button> */}
        </div>
      </div>
  );
}

export default DatePickers