var input, inputLabel;
var img;
var f_file;
var s_seconds;
var startMillis;
var capturer = new CCapture({
  framerate: 20,
  format: 'gif',
  workersPath: './js/',
  verbose: true,
  name: 'testgif',
  display: false
});
var frames;



function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createFileInput(handleFile);
  input.position(0, 0);
  input.position(0, -50);
  input.attribute("name", "file");
  input.attribute("id", "file");
  inputLabel = createElement('label', 'Drop a sketch file...');
  inputLabel.attribute("for", "file");
  inputLabel.position(windowWidth / 2 - 105, windowHeight / 2);
  styleElement(inputLabel, ['color', 'white', 'padding', '10px', 'border', '3px dashed white', 'border-radius', '21px', 'font-size', '1.5em', 'font-family', 'Arial', 'cursor', 'pointer', 'transition', 'opacity 1.5s']);

}

function draw() {
  background(40);
  noFill();
  stroke(255);
  strokeWeight(5);
  rect(windowWidth * 0.015, windowWidth * 0.015, windowWidth * .97, windowHeight * 0.955);

}


function handleFile(file) {

}

function styleElement(element, styles) {
  if(styles.length==0||styles.length%2!==0) {
    throw "Styles array is not evenly sized or is empty!";
  }
  if(!element) {
    throw "Please pass in an element";
  }
  for(var i=0; i<styles.length; i+=2) {
    element.style(styles[i], styles[i+1]);
  }
}


function handleFile(file) {
  f_file = file;
  if (file.subtype === 'javascript') {
    var imported = document.createElement("script");
    imported.innerHTML = file.data; //saved in "other js" folder
    document.getElementsByTagName("head")[0].appendChild(imported);

    var sFunc = setup;
    setup = function () {
      sFunc.apply(sFunc);
      capturer.start();
    }

    var dFunc = draw;
    draw = function () {
      // duration in milliseconds
      var duration = 2540;
      // compute how far we are through the animation as a value 
      // between 0 and 1.
      var elapsed = millis() - startMillis;
      var t = map(elapsed, 0, duration, 0, 1);
      // if we have passed t=1 then end the animation.
      if (t > 1) {
        noLoop();
        console.log('finished recording.');
        capturer.stop();
        capturer.save();
        return;
      }
      dFunc.apply(dFunc);
      capturer.capture(document.getElementById('defaultCanvas0'));
    }
    if(typeof preload !== "undefined") preload();
    setup();
    draw();
  }
}