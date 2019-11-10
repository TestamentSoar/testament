import React, {Component} from 'react';
import axis from 'axios'
//import DropZone from 'react-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

class Zaisan extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      inputs: {
        property_type: '',
        creditPropData: '',
      },
    };
  }

  componentDidMount() {
    const userID = 1; // we must use auth
    axios.get('http://localhost:8000/api/v1/credit_prop/')
      .then(res => {
        let creditPropData = res.data.filter((item, index) => {
          if (item.user === 1) return true;
        });
        this.setState({
          creditPropData: creditPropData
        });
      })
  }

  render() {
    return (
      <div>
        Properties

        <FormControl>
          <label>Property type</label>
          <Select
            labelId="account_type-label"
            id="account_type"
            value={this.state.inputs.property_type}
          >
            <MenuItem value={0}>Credit property</MenuItem>
            <MenuItem value={1}>Real estate property</MenuItem>
            <MenuItem value={2}>Others property</MenuItem>
          </Select>
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
