import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleReactTooltip from './SimpleReactTooltip';

const Child = ({hoverRef, isHover}) => {
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
