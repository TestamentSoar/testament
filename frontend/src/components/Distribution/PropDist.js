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
      this.setState({
        credits: response.data,
      });
      console.log('hello');
    });
  }

  render() {
    const {credits} = this.state;
    return (
      <div>
        {credits.map(credit => (
          <h1>{credit.bank}</h1>
        ))}
      </div>
    );
  }
}

export default PropDist;
