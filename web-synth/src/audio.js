window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var osc = context.createOscillator();
var vol = context.createGain();

export function play(wave){
    osc.type = wave;
  }

export function start(){
  vol.connect(context.destination);
  vol.gain.value = 0.5
  osc.start();
  osc.connect(vol);
  //TODO: ERROR WHEN RESTARTING
}

export function stop(){
  osc.disconnect();
  vol.disconnect();
}

export function setFreq(){
  osc.frequency.value = document.getElementById('freqRange').value;
  var label = document.getElementById('freqLabel');
  label.innerHTML = osc.frequency.value;
}

export function setVol(){
  vol.gain.setValueAtTime(document.getElementById('volRange').value, context.currentTime);
  var label = document.getElementById('volLabel');
  label.innerHTML = document.getElementById('volRange').value;
}