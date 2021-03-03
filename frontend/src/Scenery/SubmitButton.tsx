import React from 'react';
import { Button, Color, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
    },
  }),
);

interface SubmitButtonProps {
  rows: number;
  cols: number;
  url?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
    const readColors = () => {
    let colors: string[] = [];

    for (var i = 0; i < props.rows; i++) {
      for (var j = 0; j < props.cols; j++) {
        const pixel = document.getElementById(`pixel-${i}-${j}`);
        colors.push(pixel != null ? pixel.style.backgroundColor : "rgb(0,0,0)");
      }
    }
    
    return colors;
  };
    const sendData = () => {
      var xmlhttp = new XMLHttpRequest();
      const url = props.url != null ? props.url : "http://192.168.178.100/json/state";

      const colors = readColors();
      console.log(colors);
  
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
        <Button onClick={sendData} >Upload to WLED</Button>
    )
}

export default SubmitButton;