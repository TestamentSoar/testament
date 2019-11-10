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

class Yuigonshya extends Component {
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
          <Grid container spacing={1} justify="center" alignItems="center">
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <Link to="main">戻る</Link>
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography align="center" variant="h4" component="h1">
                遺言者の登録
              </Typography>
            </Grid>
            <Box m={1} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>名前</label>
                <Input name="name" value={this.state.inputs.name} />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>住所</label>
                <Input name="alias" value={this.state.inputs.founded_date} />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>本籍</label>
                <Input name="hobby" value={this.state.inputs['hobby']} />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="h6" component="h2">
                <label>生年月日</label>
                <Input name="point" value={this.state.inputs.point} />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="body1" component="h2">
                <label>メールアドレス</label>
                <Input
                  name="introduction"
                  value={this.state.inputs.introduction}
                />
              </Typography>
            </Grid>
            <Box m={2} />
            <Grid item xs={11}>
              <Typography align="left" variant="body1" component="h2">
                <label>パスワード</label>
                <Input
                  name="introduction"
                  value={this.state.inputs.introduction}
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

export default Yuigonshya;
