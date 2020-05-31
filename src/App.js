import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleReactTooltip from './SimpleReactTooltip';

const Child = ({hoverRef, isHover}) => {
  return(
    <div style={{width: '150px', height:  '150px'}}></div>
  )
}

function App() {

  const Comp =  <div>pppp</div>

  return (
    <div className="App">
      <SimpleReactTooltip tooltip={Comp}>
        <Child />
      </SimpleReactTooltip>
      
    </div>
  );
}

export default App;
