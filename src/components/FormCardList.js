import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile'
import CreateFormCard from './CreateFormCard';
import FormCard from './FormCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px',
  },
  gridList: {
    width: '90%',
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function FormCardList({cardlist, getForms}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <GridList className={classes.gridList} cols={6.3}>
          <GridListTile style={{height:'300px'}}>
              <CreateFormCard getForms={getForms}/>
          </GridListTile>
          {cardlist.map(tile => (
            <GridListTile key={tile._id} style={{height:'300px'}}>
              <FormCard name={tile.title}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
  );
}

export default FormCardList;