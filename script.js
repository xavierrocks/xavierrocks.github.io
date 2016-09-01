var contextClass = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
var dance = document.getElementById("everybodydance");


if (contextClass) {
  var context = new contextClass();
} else {
  onError;
}
var request = new XMLHttpRequest();
request.open('GET', "https://raw.githubusercontent.com/xavierrocks/xavierrocks.github.io/master/everybodyDanceNow.mp3", true);
request.responseType = 'arraybuffer';
request.onload = function() {
 context.decodeAudioData(request.response, function(theBuffer) {
  buffer = theBuffer;
  }, onError);
}
request.send();

function onError() { console.log("Bad browser! No Web Audio API for you"); }

function unpress() { dance.classList.remove("pressed"); }

function playSound() {
 dance.classList.add("pressed");
  var source = context.createBufferSource();
  source.buffer = buffer;
 source.connect(context.destination);
  source.start(0);
  var delay = 2000;
  setTimeout(unpress,delay);
}
dance.addEventListener('click', function(event) { playSound(); });
function goToGoogleMaps() {

  window.location.assign("https://www.google.com/maps/place/40621+N+Copper+Basin+Trail,+Anthem,+AZ+85086/@33.853785,-112.1102487,17z/data=!3m1!4b1!4m5!3m4!1s0x872b62706d911b97:0xae318b550a9c242d!8m2!3d33.853785!4d-112.10806")
}
