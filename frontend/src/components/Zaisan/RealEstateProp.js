import React, {Component} from 'react';
//import DropZone from 'react-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Zaisan extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      inputs: {
        address: '',
        floor_count: '',
        floor_plan: '',
        price: '',
      },
    };
  }

  render() {
    return (
      <div>
        <FormControl>
          <label>住所</label>
          <Input name="address" value={this.state.inputs.address} />
          <label>何階建</label>
          <Input name="floor_count" value={this.state.inputs.floor_count} />
          <label>間取</label>
          <Input name="floor_plan" value={this.state.inputs.floor_plan} />
          <label>価格</label>
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
