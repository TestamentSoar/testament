import React, {Component} from 'react';
/*import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
*/
import axios from 'axios';

class PropDist extends Component {
  constructor() {
    super();
    this.state = {
      credits: [],
    };
  }
  componentDidMount() {
    console.log('hello');

    axios.get('http://localhost:8000/api/v1/credit_prop/1/').then(response => {
      console.table(response.data);
      this.setState({
        credits: response.data,
      });
    });
  }

  render() {
    const {credits} = this.state;
    return (
      <div>
        <h1>{credits.bank}</h1>
      </div>
    );
  }
}

export default PropDist;
