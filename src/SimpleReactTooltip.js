import React, { useRef, cloneElement, useState, useEffect } from 'react';

function SimpleReactTooltip({children, tooltip}) {
    const ToolTip = cloneElement(tooltip);
    const [state, setState] = useState({x: 0, y: 0});
    const toolRef = useRef();
    const childRef = useRef();
    const [enter, setEnter] = useState(false);
    const Comp = ({x, y, enter}) => {
        const handleStyle = {
            position: 'fixed',
            left:x + 'px', 
            top:y + 'px',
            visibility: (enter)?'visible':'hidden',
            zIndex:100
        }
        return(
            <div ref={toolRef} style={handleStyle} >
                {ToolTip}
            </div>
        )
    }

    const handleMouseEnter = e => {
        setEnter(true)
        setState({x: e.clientX + 20 , 
            y: e.clientY + 20});
    }


    return (
        <div>
        <Comp x={state.x} y={state.y} enter={enter}/>
        <div ref={childRef} 
            onMouseMove={handleMouseEnter} 
            onMouseOut={() => setEnter(false)}>
            {children}
        </div>
        </div>
    )
}

export default SimpleReactTooltip;