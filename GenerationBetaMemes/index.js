<canvas id="canvas" width="1024" height="1024">
  Canvas requires a browser that supports HTML5.
</canvas>
<img crossOrigin="Anonymous" id="the woks" src="https://i.kym-cdn.com/photos/images/newsfeed/002/229/102/5c5.jpg"/>
  
  function drawImage(text) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = document.getElementById('salt-bae');  
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.onload = function() {
  drawImage();
}

ctx.drawImage(img, x, y, width, height);

function loadAndDrawImage(src) {
  // Create an image object. (Not part of the dom)
  const image = new Image();
  
  // After the image has loaded, draw it to the canvas
  image.onload = () => { 
    // draw image 
  };

  // Then set the source of the image that we want to load
  image.src = src;
}
