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
        name: '',
        founded_date: '',
        point: '',
        introduction: '',
        hobby: '',
      },
    };
  }

  render() {
    return (
      <div>
        <FormControl>
          <label>預貯金</label>
          <Input name="name" value={this.state.inputs.name} />
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
