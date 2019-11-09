import React, {Component} from 'react';
//import DropZone from 'react-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class Sozokunin extends Component {
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
          <label>名前</label>
          <Input name="name" value={this.state.inputs.name} />
          <label>住所</label>
          <Input name="alias" value={this.state.inputs.founded_date} />
          <label>本籍</label>
          <Input name="hobby" value={this.state.inputs['hobby']} />
          <label>生年月日</label>
          <Input name="point" value={this.state.inputs.point} />
          <label>仕事</label>
          <Input name="introduction" value={this.state.inputs.introduction} />
          <label>関係</label>
          <Input name="introduction" value={this.state.inputs.introduction} />
          <label>価値予想</label>
          <Input name="introduction" value={this.state.inputs.introduction} />
          <Button variant="raised" onClick={this.handleSubmit}>
            Submit
          </Button>
        </FormControl>
        <Link to="main">戻る</Link>
      </div>
    );
  }
}

export default Sozokunin;
