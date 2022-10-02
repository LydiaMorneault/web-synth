window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

function play(wave, freq){
    var myOscillator = context.createOscillator();
    myOscillator.frequency.value = freq;
    myOscillator.type = wave;
  
    myOscillator.connect(context.destination);
    myOscillator.start();
    myOscillator.stop(context.currentTime + 2);
  }