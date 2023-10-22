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

    switch (state) {
      case 0:
        l = <Intro/>;
        break;
      case 1:
        l = <TextPanel data={text} key="text" />
        break;
      case 2:
        l = <TextPanel data={comic1} key="comic1" />
        break;
      case 3:
        l = <TextPanel data={comic2} key="comic2" />
        break;
      case 4:
        l = <MoviePanel data={movie} key="movie"/>
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
        <button onClick={() => setState(0)}>intro</button>
        <button onClick={() => setState(1)}>text only</button>
        <button onClick={() => setState(2)}>reader 1</button>
        <button onClick={() => setState(3)}>reader 2</button>
        <button onClick={() => setState(4)}>movie</button>
      </div>
      {getContent()}
    </div>
  );
}

export default App;
