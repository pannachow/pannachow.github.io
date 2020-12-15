import React, { useEffect, useRef } from 'react';
import { start } from 'hexagoner';

export default function Hexagoner(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current === null) throw new Error('Canvas not available.');
    start(canvasRef.current, props);
  }, [props]);

  return <canvas ref={canvasRef} style={props.canvasStyle}></canvas>;
}
