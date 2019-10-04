import './assets/styles.css';
import * as Zdog from 'zdog';

// stretch canvas out to maximum size
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// set up the root Illustration object
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '#canvas',
  dragRotate: true,
});

// --- MAKE THE DRAWING HERE --- //

/** Make updates to the drawing here */
const updateDrawing = () => {};

// Optional animation handler
let _prevFrame = 0;
const _fps = 16;
const _updateTime = 1000 / _fps;
// start animation
function animate() {
  // rotate illo each frame
  const now = Date.now();
  if (now - _prevFrame > _updateTime) {
    updateDrawing();
    _prevFrame = now;
  }
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
animate();
illo.updateRenderGraph();
