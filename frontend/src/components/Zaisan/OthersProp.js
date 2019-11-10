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
        item: '',
        price: '',
      },
    };
  }

  render() {
    return (
      <div>
        <FormControl>
          <label>品目</label>
          <Input name="item" value={this.state.inputs.item} />
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
