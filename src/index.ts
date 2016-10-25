export type ImageElement = HTMLImageElement | HTMLCanvasElement;

function createCanvas(w: number, h: number) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;

  const context = canvas.getContext('2d');

  return { canvas, context };
}

export function repeat(sourceImage: ImageElement, timesX: number, timesY: number) {
  const destW = sourceImage.width * timesX;
  const destH = sourceImage.height * timesY;

  const { canvas, context } = createCanvas(destW, destH);

  const pattern = context.createPattern(sourceImage, 'repeat');

  context.fillStyle = pattern;
  context.fillRect(0, 0, destW, destH);

  return canvas.toDataURL();
}

// make the image bigger or smaller
// note from spec http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas_CR/#drawing-images-to-the-canvas
// "This specification does not define the algorithm to use when scaling the image, if necessary."
// which makes it mostly useless
export function scale(sourceImage: ImageElement, scaleX: number, scaleY: number, algorithm?: string) {
  const destW = sourceImage.width * scaleX;
  const destH = sourceImage.width * scaleY;

  const { canvas, context } = createCanvas(destW, destH);

  if (algorithm === 'nearest-neighbor') {
    (context as any).imageSmoothingEnabled = false;
    context.oImageSmoothingEnabled = false;
    context.msImageSmoothingEnabled = false;
    context.webkitImageSmoothingEnabled = false;
    context.mozImageSmoothingEnabled = false;
  }
  // TODO: more algorithms, probably using ndarray see https://github.com/deathcap/touchup/issues/1

  context.drawImage(sourceImage, 0, 0, destW, destH);

  return canvas.toDataURL();
}

export function crop(sourceImage: ImageElement, ox: number, oy: number, ow: number, oh: number) {
  const sx = ox || 0;
  const sy = oy || 0;

  const destW = sourceImage.width - (ow || 0) - sx;
  const destH = sourceImage.height - (oh || 0) - sy;

  const sw = destW;
  const sh = destH;

  const { canvas, context } = createCanvas(destW, destH);

  console.log(sx,sy,sw,sh,0,0,destW,destH);
  context.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, destW, destH);

  return canvas.toDataURL();
}

function overallSize(sourceImages: ImageElement[]) {
  let destW = 0, destH = 0;
  for (let sourceImage of sourceImages) {
    if (sourceImage.width > destW) destW = sourceImage.width;
    if (sourceImage.height > destH) destH = sourceImage.height;
  }

  return [destW, destH];
}

export function overlay(sourceImages: ImageElement[], operation?: string, alpha?: number) {
  const [destW, destH] = overallSize(sourceImages);
  const { canvas, context } = createCanvas(destW, destH);

  //  see http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas_CR/#compositing
  context.globalAlpha = alpha !== undefined ? alpha : 1.0;
  context.globalCompositeOperation = operation !== undefined ? operation : 'source-over';

  for (let sourceImage of sourceImages) {
    context.drawImage(sourceImage, 0, 0);
  }

  return canvas.toDataURL();
}

function packRGBA(r: number, g: number, b: number, a: number) {
  return r * 0x01000000 +    // not << 24 because of signedness
    (g << 16) +
    (b << 8) +
    a;
}

function unpackRGBA(n: number) {
  const r = n >>> 24;
  const g = n >>> 16 & 0xff;
  const b = n >>> 8 & 0xff;
  const a = n & 0xff;
  return [r, g, b, a];
}

export function recolor(sourceImage: ImageElement, fromColor: number, toColor: number) {
  const { canvas, context } = createCanvas(sourceImage.width, sourceImage.height);

  context.drawImage(sourceImage, 0, 0);
  const imagedata = context.getImageData(0, 0, sourceImage.width, sourceImage.height);
  const data = imagedata.data;
  for (let i = 0; i < data.length; i += 4) { // TODO: optimize, use ndarray/cwise?
    //[r, g, b, a] = data.data[i..i + 3] # Uint8ClampedArray has no method 'slice'
    let r = data[i];
    let g = data[i + 1];
    let b = data[i + 2];
    let a = data[i + 3];
    let rgba = packRGBA(r, g, b, a);
    //console.log('rgba',r,g,b,rgba,rgba.toString(16))

    if (rgba === fromColor) {
      [r, g, b, a] = unpackRGBA(toColor);
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = a;
    }
  }

  context.putImageData(imagedata, 0, 0);

  return canvas.toDataURL();
}
