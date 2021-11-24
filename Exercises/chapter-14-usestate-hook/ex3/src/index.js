import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Control = ({
  value,
  children,
  onIncrease,
  onDecrease
}) => (
  <div className="control">
    <button onClick={onDecrease}>&ndash;</button>
    <div>
      <span className="value">{value}</span>
      <span className="label">{children}</span>
    </div>
    <button onClick={onIncrease}>+</button>
  </div>
);

// This version of the component stores its state as 4 separate variables
const AudioControlsWithMultipleVariables = () => {
  const [volume, setVolume] = useState(47);
  const [treble, setTreble] = useState(13);
  const [mid, setMid] = useState(32);
  const [bass, setBass] = useState(50);

  return (
    <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={() => setVolume(volume + 1)}
        onDecrease={() => setVolume(volume - 1)}
      >
        VOLUME
      </Control>

      <Control
        value={treble}
        onIncrease={() => setTreble(treble + 1)}
        onDecrease={() => setTreble(treble - 1)}
      >
        TREBLE
      </Control>

      <Control
        value={mid}
        onIncrease={() => setMid(mid + 1)}
        onDecrease={() => setMid(mid - 1)}
      >
        MID
      </Control>

      <Control
        value={bass}
        onIncrease={() => setBass(bass + 1)}
        onDecrease={() => setBass(bass - 1)}
      >
        BASS
      </Control>
    </div>
  );
};

// This version stores the state in a single object
const AudioControlsWithOneObject = () => {
  const [{ volume, bass, mid, treble }, setValues] = useState({
    volume: 53,
    bass: 17,
    mid: 51,
    treble: 32
  });

  const increase = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] + 1
    }));
  }

  const decrease = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] - 1
    }));
  }

  return <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={increase('volume')}
        onDecrease={decrease('volume')}
      >
        VOLUME
      </Control>

      <Control
        value={treble}
        onIncrease={increase('treble')}
        onDecrease={decrease('treble')}
      >
        TREBLE
      </Control>

      <Control
        value={mid}
        onIncrease={increase('mid')}
        onDecrease={decrease('mid')}
      >
        MID
      </Control>

      <Control
        value={bass}
        onIncrease={increase('bass')}
        onDecrease={decrease('bass')}
      >
        BASS
      </Control>
    </div>
};

ReactDOM.render(
  <>
    <h1>With Multiple Variables</h1>
    <AudioControlsWithMultipleVariables />

    <h1>With A Single Object</h1>
    <AudioControlsWithOneObject />
  </>,
  document.querySelector('#root')
);
