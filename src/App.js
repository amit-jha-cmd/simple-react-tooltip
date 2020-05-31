import React from 'react';
import './App.css';
import SimpleReactTooltip from './SimpleReactTooltip';

const Child = () => {
  return(
    <div className={'child'}>
      <p>Hover over me</p>
    </div>
  )
}

function App() {

  const Comp =  <div className={'tooltip'}>
    <p>I'm a tooltip</p>
  </div>

  return (
    <div className="App">
      <SimpleReactTooltip tooltip={Comp}>
        <Child />
      </SimpleReactTooltip>
      
    </div>
  );
}

export default App;
