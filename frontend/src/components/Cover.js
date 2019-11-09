import React from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const theme = {
  spacing: 8,
}

const Cover = () => {
  return (
    <div>
      <Box m={10} />
      <Typography align='center' variant='h6' component='h2'>yuikotoba</Typography>
      <Typography align='center' variant='h2' component='h1'>結言葉</Typography>
      <Box m={3} />
      <Typography align='center' variant='h4' component='h2'>無料遺言書作成アプリ</Typography>
      <Typography align='center' variant='h6' component='h2'>last will and testament app</Typography>
      <Box m={40} />
      <Typography align='center'>チームテスタメント法律事務所監修</Typography>
      <Typography align='center'><Link to="explain">進む</Link></Typography>
    </div>
  );
};

export default Cover;
