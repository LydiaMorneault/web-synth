window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var osc = context.createOscillator();
var vol = context.createGain();


function play(wave){
    osc.type = wave;
  }

function start(){
  osc.start();
  osc.connect(context.destination);
  vol.connect(context.destination);
  //TODO: ERROR WHEN RESTARTING
}

function stop(){
  osc.disconnect();
  vol.disconnect();
}

function setFreq(){
  osc.frequency.value = document.getElementById('freqRange').value;
  label = document.getElementById('freqLabel');
  label.innerHTML = osc.frequency.value;
}

function setVol(){
  vol.gain.setValueAtTime(document.getElementById('volRange').value, context.currentTime);
  label = document.getElementById('volLabel');
  label.innerHTML = document.getElementById('volRange').value;
}