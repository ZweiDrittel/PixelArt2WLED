import { Color, createStyles, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    pixel: {
      width: '20px',
      height: '20px',
    },
  }),
);

export interface PixelProps {
    id: string;
    color: string;
};

const Pixel: React.FC<PixelProps> = (props) => {
    const classes = useStyles();
    
    return (
        <Paper id={`pixel-${props.id}`} className={classes.pixel} style={{backgroundColor: props.color}} variant="outlined" square></Paper>
      );
}

export default Pixel;