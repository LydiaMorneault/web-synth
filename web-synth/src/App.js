import {play, setFreq, start, stop, setVol} from './audio';
export default function App() {
  return (
    <div className="App">
      <head>
        <h1>Header</h1>
      </head>
      <body>
            <image src="sine.jpg" onClick={play('sine')} alt="Sine" />
            <image src="sawtooth.jpg" onClick={play('sawtooth')} alt="Sine" />
            <image src="triangle.jpg" onClick={play('square')} alt="Sine" />
            <image src="square.jpg" onClick={play('triangle')} alt="Sine" />
            <br/>
            <button onclick={start()}>On</button>
            <button onclick={stop()}>Off</button>
            <br/>
            <label>
                Frequency
                <input type="range" min="20" max="1000" value="220" id="freqRange" step="1" oninput={setFreq()} class="center"/>
            </label>
            <label id="freqLabel">220</label>
            <br/>
            <label>
                Volume
                <input type="range" min="0.01" max="1.0" value="0.5" id="volRange" step="0.01" oninput={setVol()} class="center"/>
            </label>
            <label id="volLabel">0.5</label>
          </body>
    </div>
  );
}

