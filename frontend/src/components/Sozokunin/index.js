import React, {Component} from 'react';
//import DropZone from 'react-dropzone';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

class Sozokunin extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
      inputs: {
        name: '',
        address: '',
        honseki: '',
        birth: '',
        job: '',
        zokugara: '',
      },
    };
  }
  handleChange(e) {
    console.log(e);
    this.setState({inputs: e.inputs});
  }
  render() {
    return (
      <div>
        <FormControl>
          <Grid container spacing={1} justify="center" alignItems="center">
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <Link to="main">戻る</Link>
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography align="center" variant="h4" component="h1">
                相続人の登録
              </Typography>
            </Grid>
            <Box m={1} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>名前</label>
                <Input
                  name="name"
                  value={this.state.inputs.name}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        name: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>住所</label>
                <Input
                  name="alias"
                  value={this.state.inputs.address}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        address: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>本籍</label>
                <Input
                  name="hobby"
                  value={this.state.inputs.honseki}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        honseki: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>生年月日</label>
                <Input
                  name="point"
                  value={this.state.inputs.birth}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        birth: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>職業</label>
                <Input
                  name="introduction"
                  value={this.state.inputs.job}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        job: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>続柄</label>
                <Input
                  name="introduction"
                  value={this.state.inputs.zokugara}
                  onChange={e =>
                    this.handleChange({
                      ...this.state,
                      inputs: {
                        ...this.state.inputs,
                        zokugara: e.target.value,
                      },
                    })
                  }
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="center" variant="h1" component="h1">
                <Button
                  variant="contained"
                  color="white"
                  onClick={this.handleSubmit}>
                  登録
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    );
  }
}

export default Sozokunin;
