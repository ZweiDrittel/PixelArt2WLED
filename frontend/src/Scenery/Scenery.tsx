import React from 'react';
import Canvas from '../Canvas/canvas';
import TextField from '@material-ui/core/TextField';

const Scenery: React.FC = () => {
  const [rows, setRows] = React.useState(16);
  const handleRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRows(parseInt(event.target.value));
  };
  const [cols, setCols] = React.useState(16);
  const handleColsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCols(parseInt(event.target.value));
  };

  return (
    <div className="Scenery">
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
    </div>
  );
}

export default Scenery;