import{useState,useEffect} from 'react';
import canvasimage from './canvasimage';

function Canvas() {
const [canvas, setCanvas] = useState(null);
const [ctx, setCtx] = useState(null);

useEffect(() => {
    const canvasElement = document.getElementById('canvaas');
    setCanvas(canvasElement);
    setCtx(canvasElement.getContext('2d'));

    if (canvasElement && canvasimages.length > 0) {
        const img = new Image();
        img.src = canvasimages[0];
        img.onload = () => {
            canvasElement.width = img.width;
            canvasElement.height = img.height;
            canvasElement.getContext('2d').drawImage(img, 0, 0);
        };
    }
      
    });
  return 

  
}

export default Canvas;