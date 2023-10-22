import { useState } from 'react';
import './App.css';
import TextPanel from './components/TextPanel';
import MoviePanel from './components/MoviePanel';
import Intro from './components/Intro';
import { text,comic1,comic2,movie } from "./data/data"

function App() {

  const [state, setState] = useState(0);

  function getContent() {
    let l = <div></div>;
    let bottomData = <div></div>;

    switch (state) {
      case 0:
        l = <Intro/>;
        break;
      case 1:
        bottomData = <p>Reading just the text of the story, what images are conjured in your mind's eye to fill the blank space? </p>
        l = <TextPanel data={text} bottomData={bottomData} key="text" />
        break;
      case 2:
        bottomData = <p>Reader 1 is encountering the story for the first time</p>
        l = <TextPanel data={comic1} bottomData={bottomData} key="comic1" />
        break;
      case 3:
        bottomData = <p>Reader 2 has read the story before and anticipates the ending</p>
        l = <TextPanel data={comic2} bottomData={bottomData} key="comic2" />
        break;
      case 4:
        bottomData = <p>
          The director has a specific idea of how the images are to be presented to all viewers<br/>
          The imagery and pacing is the same for all viewers, no matter who they are.
        </p>
        l = <MoviePanel data={movie} bottomData={bottomData} key="movie"/>
        break;
      default:
        l = <p></p>;
        break;
    }

return <>
      {l}
    </>;
  }

  return (
    <div className="App">
      <div>
        <button style={{ height: "50px", width: "15%", minWidth: "100px" }} onClick={() => setState(0)}>1: Introduction</button>
        <button style={{ height: "50px", width: "15%", minWidth: "100px" }} onClick={() => setState(1)}>2: Text only</button>
        <button style={{ height: "50px", width: "15%", minWidth: "100px" }} onClick={() => setState(2)}>3: Reader 1</button>
        <button style={{ height: "50px", width: "15%", minWidth: "100px" }} onClick={() => setState(3)}>4: Reader 2</button>
        <button style={{ height: "50px", width: "15%", minWidth: "100px" }} onClick={() => setState(4)}>5: Movie</button>
      </div>
      {getContent()}
    </div>
  );
}

export default App;
