import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Explain = () => {
  const classes = useStyles();

  const explain = {
    title: 'このアプリについて',
    content:
      '本アプリは自分の残したもののために家族がバラバラにならないよう約束を結んでおくアプリです。',
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} justify="center" alignItems="center">
        <Box m={10} />
        <Grid item xs={11}>
          <Typography align="center" variant="h6" component="h2">
            {explain.title}
          </Typography>
        </Grid>
        <Box m={2} />
        <Grid item xs={11}>
          <Typography align="center" variant="h6" component="h2">
            {explain.content}
          </Typography>
        </Grid>
        <Box m={10} />
        <Grid item xs={11}>
          <Typography align="center" variant="h6" component="h2">
            <Link to="">
              <Button variant="contained" color="white">
                戻る
              </Button>
            </Link>
            <Link to="main">
              <Button variant="contained" color="white">
                進む
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Explain;
