import React from 'react';
import Canvas from '../Canvas/canvas';
import TextField from '@material-ui/core/TextField';
import { Button, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
    },
  }),
);

const Scenery: React.FC = () => {
  const [rows, setRows] = React.useState(16);
  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(event.target.value));
  };
  const [cols, setCols] = React.useState(16);
  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCols(parseInt(event.target.value));
  };

  const classes = useStyles();

  const sendData = () => {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://192.168.178.100/json/state";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var json = JSON.parse(xmlhttp.responseText);
          console.log(json);
        }
    };
    xmlhttp.open("POST", url, true);
    var data = JSON.stringify({"on": true,
                "seg": {
                  "i": [0,[255,0,0]]}});
    xmlhttp.send(data);
  };

  return (
    <div className={classes.root}>
      <TextField 
        id="rows"
        label="Rows"
        variant="outlined" 
        type="number"
        value={rows}
        onChange={handleRowsChange} />
      <TextField 
        id="columns" 
        label="Columns" 
        variant="outlined" 
        type="number"
        value={cols}
        onChange={handleColsChange} />

      <Canvas rows={rows} cols={cols} />
      <Button onClick={sendData} >Upload to WLED</Button>
    </div>
  );
}

export default Scenery;