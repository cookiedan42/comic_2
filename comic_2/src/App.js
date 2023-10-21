import { useState } from 'react';
import './App.css';
import Panel from './components/Panel';


function App() {

  const [state, setState]= useState(0);


  function getContent(){
    return <p>{state}</p>;
  }


  return (


    <div className="App">
      {/* 
        App default state = intro 
        clicking changes state to 1 of 4 routes
        each route can be a different component for convinience

      */}
      <div>{getContent()}</div>
      <Panel></Panel>
      <div>
      <button onClick={()=>setState(0)}>intro state = 0</button>
      <button onClick={()=>setState(1)}>text only state = 1</button>
      <button onClick={()=>setState(2)}>reader 1 state = 2</button>
      <button onClick={()=>setState(3)}>reader 2 state = 3</button>
      <button onClick={()=>setState(4)}>movie state = 4</button>


      </div>


    </div>
  );
}

export default App;
