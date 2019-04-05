var input;
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
  input.size(60,60);
}

function draw() {
  background(0);
}


function handleFile(file){
     
}

// function handleFile(file) {
//   f_file = file;
//   if (file.subtype === 'javascript') {
//     var imported = document.createElement("script");
//     imported.innerHTML = file.data; //saved in "other js" folder
//     document.getElementsByTagName("head")[0].appendChild(imported);
    
//     var sFunc = setup;
//     setup = function () {
//       sFunc.apply(sFunc);
//       capturer.start();
//     }
    
//     var dFunc = draw;
//     draw = function () {
//       // duration in milliseconds
//       var duration = 2540;
//       // compute how far we are through the animation as a value 
//       // between 0 and 1.
//       var elapsed = millis() - startMillis;
//       var t = map(elapsed, 0, duration, 0, 1);
//       // if we have passed t=1 then end the animation.
//       if (t > 1) {
//         noLoop();
//         console.log('finished recording.');
//         capturer.stop();
//         capturer.save();
//         return;
//       }
//       dFunc.apply(dFunc);
//       capturer.capture(document.getElementById('defaultCanvas0'));
//     }
//     // if(typeof preload !== "undefined") preload();
//     setup();
//     draw();
//   }
// }