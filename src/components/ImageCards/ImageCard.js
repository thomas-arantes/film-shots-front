import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ImageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick = {props.onClick}>
      <CardActionArea>
        <CardMedia
          component = {'img'}
          alt = {props.subtitle}
          image = {props.image}
          title = {props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align={'center'}>
            {props.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}