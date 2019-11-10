import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Pie} from 'react-chartjs-2';

class PlanDist extends Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        a: '',
        b: '',
        c: '',
        d: '',
      },
      data: [],
      backgroundColor: ['red', 'yellow', 'blue', 'green'],
      labels: ['Red', 'Yellow', 'Blue', 'Green'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: [],
    });
  }
  handleChange(e) {
    console.log(e);
    this.setState({inputs: e.inputs});
  }

  handleClick = () => {
    let list = [];
    const {inputs} = this.state;
    list.push(inputs.a);
    list.push(inputs.b);
    this.setState({
      data: [],
    });
    this.setState({
      data: list,
    });
  };

  render() {
    const inputs = this.state;
    const sozokus = [{id: 0, name: 'A子'}, {id: 1, name: 'B子'}];
    return (
      <div>
        <FormControl>
          {sozokus.map(sozoku => (
            <div>
              <label>{sozoku.name}</label>
              {(() => {
                if (sozoku.id === 0) {
                  return (
                    <Input
                      name="a"
                      value={inputs.a}
                      onChange={e =>
                        this.handleChange({
                          ...this.state,
                          inputs: {...this.state.inputs, a: e.target.value},
                        })
                      }
                    />
                  );
                } else if (sozoku.id === 1) {
                  return (
                    <Input
                      name="b"
                      value={inputs.b}
                      onChange={e =>
                        this.handleChange({
                          ...this.state,
                          inputs: {...this.state.inputs, b: e.target.value},
                        })
                      }
                    />
                  );
                } else if (sozoku.id === 2) {
                  return <Input name="c" value={inputs.c} />;
                } else if (sozoku.id === 3) {
                  return <Input name="d" value={inputs.d} />;
                }
              })()}
            </div>
          ))}

          <Button variant="raised" onClick={this.handleClick}>
            反映
          </Button>
        </FormControl>
        <Pie
          data={{
            labels: this.state.labels,
            datasets: [
              {
                data: this.state.data,
                backgroundColor: this.state.backgroundColor,
              },
            ],
          }}
        />
      </div>
    );
  }
}
export default PlanDist;
