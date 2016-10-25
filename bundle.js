/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var touchup = __webpack_require__(1);
	var sourceURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAAH9JREFUOBFjDLGQ/c9AAWAB6fU0lCTLiO3nnzOADQDpBnFIATBLmUjRhE0t3AUwSZjJMD46je5SDANAGtAVwQzBZjjFXsBrAMhGbLbCXASi8RqArBAXG2sYwBTjCguYPIimjQsI+RvZBRheIMbZyAZQzwukOBvZBWAvkOpsZAMAZjkXbXx1uTEAAAAASUVORK5CYII=';
	var transSourceURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAEJGlDQ1BJQ0MgUHJvZmlsZQAAOBGFVd9v21QUPolvUqQWPyBYR4eKxa9VU1u5GxqtxgZJk6XtShal6dgqJOQ6N4mpGwfb6baqT3uBNwb8AUDZAw9IPCENBmJ72fbAtElThyqqSUh76MQPISbtBVXhu3ZiJ1PEXPX6yznfOec7517bRD1fabWaGVWIlquunc8klZOnFpSeTYrSs9RLA9Sr6U4tkcvNEi7BFffO6+EdigjL7ZHu/k72I796i9zRiSJPwG4VHX0Z+AxRzNRrtksUvwf7+Gm3BtzzHPDTNgQCqwKXfZwSeNHHJz1OIT8JjtAq6xWtCLwGPLzYZi+3YV8DGMiT4VVuG7oiZpGzrZJhcs/hL49xtzH/Dy6bdfTsXYNY+5yluWO4D4neK/ZUvok/17X0HPBLsF+vuUlhfwX4j/rSfAJ4H1H0qZJ9dN7nR19frRTeBt4Fe9FwpwtN+2p1MXscGLHR9SXrmMgjONd1ZxKzpBeA71b4tNhj6JGoyFNp4GHgwUp9qplfmnFW5oTdy7NamcwCI49kv6fN5IAHgD+0rbyoBc3SOjczohbyS1drbq6pQdqumllRC/0ymTtej8gpbbuVwpQfyw66dqEZyxZKxtHpJn+tZnpnEdrYBbueF9qQn93S7HQGGHnYP7w6L+YGHNtd1FJitqPAR+hERCNOFi1i1alKO6RQnjKUxL1GNjwlMsiEhcPLYTEiT9ISbN15OY/jx4SMshe9LaJRpTvHr3C/ybFYP1PZAfwfYrPsMBtnE6SwN9ib7AhLwTrBDgUKcm06FSrTfSj187xPdVQWOk5Q8vxAfSiIUc7Z7xr6zY/+hpqwSyv0I0/QMTRb7RMgBxNodTfSPqdraz/sDjzKBrv4zu2+a2t0/HHzjd2Lbcc2sG7GtsL42K+xLfxtUgI7YHqKlqHK8HbCCXgjHT1cAdMlDetv4FnQ2lLasaOl6vmB0CMmwT/IPszSueHQqv6i/qluqF+oF9TfO2qEGTumJH0qfSv9KH0nfS/9TIp0Wboi/SRdlb6RLgU5u++9nyXYe69fYRPdil1o1WufNSdTTsp75BfllPy8/LI8G7AUuV8ek6fkvfDsCfbNDP0dvRh0CrNqTbV7LfEEGDQPJQadBtfGVMWEq3QWWdufk6ZSNsjG2PQjp3ZcnOWWing6noonSInvi0/Ex+IzAreevPhe+CawpgP1/pMTMDo64G0sTCXIM+KdOnFWRfQKdJvQzV1+Bt8OokmrdtY2yhVX2a+qrykJfMq4Ml3VR4cVzTQVz+UoNne4vcKLoyS+gyKO6EHe+75Fdt0Mbe5bRIf/wjvrVmhbqBN97RD1vxrahvBOfOYzoosH9bq94uejSOQGkVM6sN/7HelL4t10t9F4gPdVzydEOx83Gv+uNxo7XyL/FtFl8z9ZAHF4bBsrEwAAAEtJREFUOBFjYBgF+EPg////DCCMBzDilEPXyMiIVS0TTgOIlMBuALrteAzDbgA2DTgMJd4AbIYCxQbeAKxRA3Ytup9xRCMOnw0lYQB9AhIDnL6eAQAAAABJRU5ErkJggg==';
	var showImage = function (url, note, cb) {
	    var image = document.createElement('img');
	    image.setAttribute('src', url);
	    image.addEventListener('load', function () {
	        document.body.appendChild(image);
	        document.body.appendChild(document.createTextNode(note));
	        document.body.appendChild(document.createElement('br'));
	        if (cb)
	            cb(image);
	    });
	};
	showImage(sourceURL, 'source', function (imageElement) {
	    showImage(touchup.repeat(imageElement, 2, 2), 'repeat(2,2)');
	    showImage(touchup.scale(imageElement, 2.0, 2.0), 'scale(2,2)');
	    showImage(touchup.scale(imageElement, 4.0, 4.0), 'scale(4,4)');
	    showImage(touchup.scale(imageElement, 4.0, 4.0, 'nearest-neighbor'), 'scale(4,4,"nearest-neighbor")');
	    showImage(touchup.scale(imageElement, 3.0, 0.5), 'scale(3,0.5)');
	    showImage(touchup.recolor(imageElement, 0x674829ff, 0x00ff00ff), 'recolor');
	    showImage(touchup.recolor(imageElement, 0xad7c4aff, 0x0000ffff), 'recolor');
	    showImage(touchup.repeat(imageElement, 7, 9), 'repeat(7,9)', function (repImage) {
	        showImage(touchup.crop(repImage, 0, 0, 0, 0), '...crop(0,0,0,0)');
	        showImage(touchup.crop(repImage, 0, 0, 8, 70), '...crop(0,0,8,70)');
	        showImage(touchup.crop(repImage, 8, 8, 0, 80), '...crop(8,8,0,80)');
	    });
	    showImage(transSourceURL, 'transparent image', function (transImageElement) {
	        showImage(touchup.overlay([imageElement, transImageElement]), 'overlay');
	        showImage(touchup.overlay([imageElement, transImageElement], 'xor'), 'overlay(xor)');
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	function createCanvas(w, h) {
	    var canvas = document.createElement('canvas');
	    canvas.width = w;
	    canvas.height = h;
	    var context = canvas.getContext('2d');
	    return { canvas: canvas, context: context };
	}
	function repeat(sourceImage, timesX, timesY) {
	    var destW = sourceImage.width * timesX;
	    var destH = sourceImage.height * timesY;
	    var _a = createCanvas(destW, destH), canvas = _a.canvas, context = _a.context;
	    var pattern = context.createPattern(sourceImage, 'repeat');
	    context.fillStyle = pattern;
	    context.fillRect(0, 0, destW, destH);
	    return canvas.toDataURL();
	}
	exports.repeat = repeat;
	// make the image bigger or smaller
	// note from spec http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas_CR/#drawing-images-to-the-canvas
	// "This specification does not define the algorithm to use when scaling the image, if necessary."
	// which makes it mostly useless
	function scale(sourceImage, scaleX, scaleY, algorithm) {
	    var destW = sourceImage.width * scaleX;
	    var destH = sourceImage.width * scaleY;
	    var _a = createCanvas(destW, destH), canvas = _a.canvas, context = _a.context;
	    if (algorithm === 'nearest-neighbor') {
	        context.imageSmoothingEnabled = false;
	        context.oImageSmoothingEnabled = false;
	        context.msImageSmoothingEnabled = false;
	        context.webkitImageSmoothingEnabled = false;
	        context.mozImageSmoothingEnabled = false;
	    }
	    // TODO: more algorithms, probably using ndarray see https://github.com/deathcap/touchup/issues/1
	    context.drawImage(sourceImage, 0, 0, destW, destH);
	    return canvas.toDataURL();
	}
	exports.scale = scale;
	function crop(sourceImage, ox, oy, ow, oh) {
	    var sx = ox || 0;
	    var sy = oy || 0;
	    var destW = sourceImage.width - (ow || 0) - sx;
	    var destH = sourceImage.height - (oh || 0) - sy;
	    var sw = destW;
	    var sh = destH;
	    var _a = createCanvas(destW, destH), canvas = _a.canvas, context = _a.context;
	    console.log(sx, sy, sw, sh, 0, 0, destW, destH);
	    context.drawImage(sourceImage, sx, sy, sw, sh, 0, 0, destW, destH);
	    return canvas.toDataURL();
	}
	exports.crop = crop;
	function overallSize(sourceImages) {
	    var destW = 0, destH = 0;
	    for (var _i = 0, sourceImages_1 = sourceImages; _i < sourceImages_1.length; _i++) {
	        var sourceImage = sourceImages_1[_i];
	        if (sourceImage.width > destW)
	            destW = sourceImage.width;
	        if (sourceImage.height > destH)
	            destH = sourceImage.height;
	    }
	    return [destW, destH];
	}
	function overlay(sourceImages, operation, alpha) {
	    var _a = overallSize(sourceImages), destW = _a[0], destH = _a[1];
	    var _b = createCanvas(destW, destH), canvas = _b.canvas, context = _b.context;
	    //  see http://www.w3.org/html/wg/drafts/2dcontext/html5_canvas_CR/#compositing
	    context.globalAlpha = alpha !== undefined ? alpha : 1.0;
	    context.globalCompositeOperation = operation !== undefined ? operation : 'source-over';
	    for (var _i = 0, sourceImages_2 = sourceImages; _i < sourceImages_2.length; _i++) {
	        var sourceImage = sourceImages_2[_i];
	        context.drawImage(sourceImage, 0, 0);
	    }
	    return canvas.toDataURL();
	}
	exports.overlay = overlay;
	function packRGBA(r, g, b, a) {
	    return r * 0x01000000 +
	        (g << 16) +
	        (b << 8) +
	        a;
	}
	function unpackRGBA(n) {
	    var r = n >>> 24;
	    var g = n >>> 16 & 0xff;
	    var b = n >>> 8 & 0xff;
	    var a = n & 0xff;
	    return [r, g, b, a];
	}
	function recolor(sourceImage, fromColor, toColor) {
	    var _a = createCanvas(sourceImage.width, sourceImage.height), canvas = _a.canvas, context = _a.context;
	    context.drawImage(sourceImage, 0, 0);
	    var imagedata = context.getImageData(0, 0, sourceImage.width, sourceImage.height);
	    var data = imagedata.data;
	    for (var i = 0; i < data.length; i += 4) {
	        //[r, g, b, a] = data.data[i..i + 3] # Uint8ClampedArray has no method 'slice'
	        var r = data[i];
	        var g = data[i + 1];
	        var b = data[i + 2];
	        var a = data[i + 3];
	        var rgba = packRGBA(r, g, b, a);
	        //console.log('rgba',r,g,b,rgba,rgba.toString(16))
	        if (rgba === fromColor) {
	            _b = unpackRGBA(toColor), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
	            data[i] = r;
	            data[i + 1] = g;
	            data[i + 2] = b;
	            data[i + 3] = a;
	        }
	    }
	    context.putImageData(imagedata, 0, 0);
	    return canvas.toDataURL();
	    var _b;
	}
	exports.recolor = recolor;


/***/ }
/******/ ]);