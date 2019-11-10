import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom';
import pdf from './will.pdf';

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
    <div>
      {(() => {
        if (card.name === '遺言書の印刷') {
          return (
            <a href={pdf}>
              <Card className={classes.card}>
                <CardContent>
                  <h1>{card.name}</h1>
                </CardContent>
              </Card>
            </a>
          );
        } else {
          return (
            <Link to={card.link}>
              <Card className={classes.card}>
                <CardContent>
                  <h1>{card.name}</h1>
                </CardContent>
              </Card>
            </Link>
          );
        }
      })()}
    </div>
  );
};

export default MainCard;
