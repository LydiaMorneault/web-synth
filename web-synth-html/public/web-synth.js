var playing = false;
var scope;
var ctx;

// dependencies
function includeJs(jsFilePath) {
  var js = document.createElement("script");

  js.type = "text/javascript";
  js.src = jsFilePath;

  document.body.appendChild(js);
}
includeJs("https://cdn.jsdelivr.net/npm/oscilloscope@1.x");



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

    ctx = document.getElementById("oscCanvas").getContext("2d");
    ctx.strokeStyle = 'green';

    // account for amplitude
    var scopeHeight = ctx.canvas.height * vol.gain.value;

    // draw on canvas
    scope.animate(ctx, 0, (ctx.canvas.height / 2) - scopeHeight / 2, ctx.canvas.width, scopeHeight);

  }
}

// change wave type
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
  var label = document.getElementById('volLabel');
  label.innerHTML = document.getElementById('volRange').value;
  
  if (!playing) return;
  vol.gain.setValueAtTime(document.getElementById('volRange').value, context.currentTime);
  scope.stop();

  //adjust scope positioning based on volume
  var scopeHeight = ctx.canvas.height * vol.gain.value;
  scope.animate(ctx, 0, (ctx.canvas.height / 2) - scopeHeight / 2, ctx.canvas.width, scopeHeight);
}