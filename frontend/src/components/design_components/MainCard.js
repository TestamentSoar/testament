import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: '5px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const MainCard = props => {
  const classes = useStyles();
  const {card} = props;
  return (
    <Link to={card.link}>
      <Card className={classes.card}>
        <CardContent>
          <h1>{card.name}</h1>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MainCard;
