import React, { useState } from 'react';

interface CanvasProps {
    rows: Number;
    cols: Number;
};

const Canvas: React.FC<CanvasProps> = (props) => {
    return <h1>Canvas with {props.rows} rows and {props.cols} cols</h1>;
  }

export default Canvas;