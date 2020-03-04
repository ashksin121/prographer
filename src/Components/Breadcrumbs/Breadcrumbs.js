import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{fontSize: "16px"}}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Dashboard
        </Link>
        <Typography color="textPrimary">Posted Shoot</Typography>
      </Breadcrumbs>
    </div>
  );
}