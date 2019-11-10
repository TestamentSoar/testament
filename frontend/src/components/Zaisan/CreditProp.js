import React, {Component} from 'react';
//import DropZone from 'react-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Zaisan extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      inputs: {
        bank: '',
        branch: '',
        account_type: '',
        account_number: '',
        price: '',
      },
    };
  }

  render() {
    return (
      <div>
        <FormControl>
          <label>銀行</label>
          <Input name="bank" value={this.state.inputs.bank} />
          <label>支店</label>
          <Input name="branch" value={this.state.inputs.branch} />
          <label>講座の種類</label>
          <Input name="account_type" value={this.state.inputs.account_type} />
          <InputLabel id="demo-simple-select-label">Account type</InputLabel>
          <Select
            labelId="account_type-label"
            id="account_type"
            value={this.state.imputs.account_type}
          >
            <MenuItem value={0}>Saving account</MenuItem>
            <MenuItem value={1}>Current account</MenuItem>
            <MenuItem value={2}>Fixed account</MenuItem>
          </Select>
          <label>口座番号</label>
          <Input name="account_number" value={this.state.inputs.account_number} />
          <label>値段</label>
          <Input name="price" value={this.state.inputs.price} />
          <Button variant="raised" onClick={this.handleSubmit}>
            Submit
          </Button>
        </FormControl>
        <Link to="main">戻る</Link>
      </div>
    );
  }
}

export default Zaisan;
