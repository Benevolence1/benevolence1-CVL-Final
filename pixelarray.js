var video;
var vScale = 6;
var canvas;
let currentFill = 'black'; // default color
let bck = 'white'

function setup() {
  canvas = createCanvas(840, 454);
  pixelDensity(1);
  colorMode(HSB);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  frameRate(30);
  canvas.parent('sketch-holder');

const changeFill = document.getElementById('change-fill');
changeFill.addEventListener('click', () => {
  let h = random(310);   // hue 0–360
  let s = random(250);   // saturation 0–100
  let b = random(230);   // brightness 0–100
  currentFill = color(h, s, b); // store as a p5 color object
});

const BckgroundBtn = document.getElementById('change-bck');
BckgroundBtn.addEventListener('click', () => {
  let h = random(310);   // hue 0–360
  let s = random(100);   // saturation 0–100
  let b = random(100);
  bck = color(h, s, b); // store as a p5 color object
})




const interactiveHeader = document.querySelector('.Interactive-h2');
interactiveHeader.addEventListener('mouseover', ()=>{
  interactiveHeader.style.color = currentFill;
  
})
const Howdid = document.querySelector('.HowDid');
Howdid.addEventListener('mouseover', ()=>{
  Howdid.style.color = currentFill;
  
})
}

// the querySelector is just a target selector
// meaning it is selecting the class Interactive-h2
// after that we use our variable interactiveHeader
// then we add an event listener for mouseover
// then the function symbol (()=>{ }) and then inside
// then inside we add what we want to happen


//style.color means changing the color of the text
//here we are changing it to the current fill color
//the current fill color is first set to black


//but then we made a a js function that targets the 
// id change fill button and then adding an event listener
// after that placing our action after addEventListener
// then the function and then after that put our
// custom code inside the function
// inside the function we set random values for h,s,b
// then we set the current fill to be a color with those
// h,s,b values


//THEN we use our new made color function in our draw function
// so fill(currentFill) so that it uses the new color

function draw() {
  background(bck);
  video.loadPixels();

  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;

      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var wRect = map(bright, 0, 255, 0, vScale);

     noStroke()
      fill(currentFill); // use the global color here
      circle(x * vScale, y * vScale, wRect);
    }
  }
}
