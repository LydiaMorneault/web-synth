var playing = false;
var scope;

function includeJs(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}

includeJs("./node_modules/oscilloscope/dist/oscilloscope.min.js");

function start() {

  if (playing) return;
  else {
    playing = true;

    context = new AudioContext();
    osc = context.createOscillator();
    vol = context.createGain();

    scope = new Oscilloscope(osc);

    //set volume & begin playing
    setFreq();
    vol.connect(context.destination);
    vol.gain.value = document.getElementById('volRange').value;
    osc.start();
    osc.connect(vol);

    var c = document.getElementById("oscCanvas");

    var ctx = c.getContext("2d");
    ctx.strokeStyle = 'green';
    scope.animate(ctx);
 
  }
}

function play(wave) {
  osc.type = wave;
}



function stop() {
  scope.stop();
  vol.gain.value = 0;
  playing = false;

}

function setFreq() {
  osc.frequency.value = document.getElementById('freqRange').value;
  var label = document.getElementById('freqLabel');
  label.innerHTML = osc.frequency.value;
}

function setVol() {
  if (!playing) return;
  vol.gain.setValueAtTime(document.getElementById('volRange').value, context.currentTime);
  var label = document.getElementById('volLabel');
  label.innerHTML = document.getElementById('volRange').value;
}