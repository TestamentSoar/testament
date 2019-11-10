import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Pie} from 'react-chartjs-2';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

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
      labels: ['A', 'B', 'C', 'D'],
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
          <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                戻る
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography align="center" variant="h4" component="h1">
                財産の分配
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography align="center" variant="h4" component="h1">
                <FormLabel>財産の分配具合を記入してください</FormLabel>
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography align="center" variant="h6" component="h2">
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
                                inputs: {
                                  ...this.state.inputs,
                                  a: e.target.value,
                                },
                              })
                            }
                            endAdornment={
                              <InputAdornment position="end">%</InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
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
                                inputs: {
                                  ...this.state.inputs,
                                  b: e.target.value,
                                },
                              })
                            }
                            endAdornment={
                              <InputAdornment position="end">%</InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                              'aria-label': 'weight',
                            }}
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
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="center" variant="h6" component="h2">
                <Button variant="text" onClick={this.handleClick}>
                  反映
                </Button>
              </Typography>
            </Grid>
            <Box m={2} />
          </Grid>
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
