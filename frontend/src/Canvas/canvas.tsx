import { Button, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import Pixel, { PixelProps } from './pixel';
import ColorPicker from 'react-pick-color';

interface CanvasProps {
    rows: Number;
    cols: Number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorPicker: {
      margin: '25px 50px',
    },
    flexdiv: {
      display: 'flex',
      justifyContent: 'flex-start',
    },
    item: {
      padding: 0,
      margin: 0,
    },
  }),
);

const Canvas: React.FC<CanvasProps> = (props) => {
    const [color, setColor] = useState('#fff');
    const classes = useStyles();
    var pixels: PixelProps[] = [{id: '0', color: '#fff'},
                                {id: '1', color: '#fff'},
                                {id: '2', color: '#fff'},
                                {id: '3', color: '#777'},
                                {id: '4', color: '#fff'},
                                {id: '5', color: '#fff'},
                                {id: '6', color: '#fff'},
                                {id: '7', color: '#fff'},
                                {id: '8', color: '#fff'},
                                {id: '9', color: '#fff'},
                                {id: '10', color: '#fff'},
                                {id: '11', color: '#fff'},
                                {id: '12', color: '#fff'},
                                {id: '13', color: '#fff'},
                                {id: '14', color: '#fff'},
                                {id: '15', color: '#fff'},];

    interface RowIndex {
      rowIndex: string;
    }
    function FormRow(props: RowIndex) {
      return (
        <React.Fragment>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[0].id}`} color={pixels[0].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[1].id}`} color={pixels[1].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[2].id}`} color={pixels[2].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[3].id}`} color={pixels[3].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[4].id}`} color={pixels[4].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[5].id}`} color={pixels[5].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[6].id}`} color={pixels[6].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[7].id}`} color={pixels[7].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[8].id}`} color={pixels[8].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[9].id}`} color={pixels[9].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[10].id}`} color={pixels[10].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[11].id}`} color={pixels[11].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[12].id}`} color={pixels[12].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[13].id}`} color={pixels[13].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[14].id}`} color={pixels[14].color} />
          </Grid>
          <Grid className={classes.item} item>
            <Pixel id={`${props.rowIndex}-${pixels[15].id}`} color={pixels[15].color} />
          </Grid>
        </React.Fragment>
      );
    }

    return <div className={classes.flexdiv}>
            <ColorPicker  className={classes.colorPicker} color={color} onChange={(color) => setColor(color.hex)} />
            <Grid container>
              <Grid container item>
                <FormRow rowIndex={'0'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'1'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'2'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'3'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'4'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'5'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'6'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'7'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'8'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'9'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'10'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'11'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'12'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'13'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'14'} />
              </Grid>
              <Grid container item>
                <FormRow rowIndex={'15'} />
              </Grid>
            </Grid>
            </div>
  }

export default Canvas;