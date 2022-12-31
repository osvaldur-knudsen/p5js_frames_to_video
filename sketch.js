
let circleX = 100;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;

const capturer = new CCapture({
    framerate: 5,
    format: "webm",
    name: "movie",
    quality: 100,
    verbose: true,
});

let p5Canvas;

function setup() {
    p5Canvas = createCanvas(400, 400);
    frameRate(5);
    
  }
  
  function draw() {
    // if (frameCount === 1){
    //     capturer.start();
    // }

    background(0);

    // Bouncing ball
    ellipse(circleX, circleY, 120);
    circleY = circleY + 1;
        
    // capturer.capture(p5Canvas.canvas);
    // if (frameCount === 100){
    //     noLoop();
    //     capturer.stop();
    //     capturer.save();
    // }
  }

