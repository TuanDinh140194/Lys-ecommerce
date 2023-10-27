"use client";
import { useRef, FC, useEffect, useState } from 'react';

import { CanvasContext } from '../hooks/useCanvas';
import useResponsiveSize from '../hooks/useResponsiveSize';
import Wave from './Wave';

const Canvas: FC = () => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width } = useResponsiveSize();
  const [canvasWidth, setCanvasWidth] = useState(width);
  const [context, setContext] = useState<
    CanvasRenderingContext2D | undefined
  >();

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');
    if (ctx) setContext(ctx);
    
    const isSmallDevice = window.innerWidth <= 640; // Define your own breakpoint
    if (isSmallDevice) {
       setCanvasWidth(width) // Set a different width for smaller devices
    }

  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <canvas id="canvas" ref={canvasRef} width={canvasWidth} height={220}></canvas>
        <Wave />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;