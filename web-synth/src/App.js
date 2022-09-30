import './App.css';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>OSCILLOSCOPE</div>
      <div>SINE</div>
      <div>TRIANGLE</div>
      <div>SQUARE</div>
      <div>FREQUENCY</div>
      <div>VOLUME</div>
      <div>START/STOP</div>
      <button onClick={play("sine", 220)}>Sine</button>
      <button onClick={play("triangle", 277)}>Triangle</button>
      </header>
    </div>
  );
}


function play(wave, freq){
  var myOscillator = context.createOscillator();
  myOscillator.frequency.value = freq;
  myOscillator.type = wave;

  myOscillator.connect(context.destination);
  myOscillator.start();
  myOscillator.stop(context.currentTime + 2);
}

export default App;
