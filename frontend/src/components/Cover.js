import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const Cover = () => {
  return (
    <div>
      <Box m={6} />
      <Typography align="center">
        <img src={`lastwill.png`} alt="Logo" />
      </Typography>
      <Box m={1} />
      <Typography align="center" variant="h6" component="h2">
        yuikotoba
      </Typography>
      <Typography align="center" variant="h2" component="h1">
        結言葉
      </Typography>
      <Box m={3} />
      <Typography align="center" variant="h5" component="h2">
        無料遺言書作成アプリ
      </Typography>
      <Typography align="center" variant="h6" component="h2">
        last will and testament app
      </Typography>
      <Box m={20} />
      <Typography align="center">チームテスタメント法律事務所監修</Typography>
      <Link to="explain">
        <Typography align="center">
          <Button variant="contained" color="white">
            進む{' '}
          </Button>
        </Typography>
      </Link>
    </div>
  );
};

export default Cover;
