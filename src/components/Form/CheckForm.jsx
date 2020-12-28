import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckForm = (props)=> {
    return (
      <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedA} onChange={props.handleCheckForm} name="checkedA" />}
        label="国語"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedB} onChange={props.handleCheckForm} name="checkedB" />}
        label="数学Ⅰ・A"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedC} onChange={props.handleCheckForm} name="checkedC" />}
        label="数学Ⅱ・B"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedD} onChange={props.handleCheckForm} name="checkedD" />}
        label="英語(筆記)"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedE} onChange={props.handleCheckForm} name="checkedE" />}
        label="英語(リスニング)"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedF} onChange={props.handleCheckForm} name="checkedF" />}
        label="社会"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedG} onChange={props.handleCheckForm} name="checkedG" />}
        label="理科"
      />
      <FormControlLabel
        control={<Checkbox checked={props.checked.checkedH} onChange={props.handleCheckForm} name="checkedH" />}
        label="理科/社会"
      />
    </FormGroup>
    );
  }

export default CheckForm