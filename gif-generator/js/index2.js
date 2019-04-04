var input;
var img;
var f;
var s;


function setup() {
  createCanvas(300,300);
  input = createFileInput(handleFile);
  input.position(0, 0);
}

function draw() {
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  print(file);
  f = file;
  if (file.subtype === 'javascript') {
    // adding the new js

    var imported = document.createElement("script");
    imported.innerHTML = file.data;  //saved in "other js" folder
    document.getElementsByTagName("head")[0].appendChild(imported);
    setup();
    draw();
    // console.log(imported);
    // console.log(file.data);
  }
}