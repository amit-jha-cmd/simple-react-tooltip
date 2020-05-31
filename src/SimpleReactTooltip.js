import React, { useRef, useEffect, cloneElement, useState } from 'react';
import useHover from './useHover';

function SimpleReactTooltip({children, tooltip}) {
    const ToolTip = cloneElement(tooltip);
    const [state, setState] = useState({x: 0, y: 0});
    const toolRef = useRef();
    const [enter, setEnter] = useState(true);
    const Comp = ({x, y, enter}) => {
        const handleStyle = {
            position: 'fixed',
            left:x + 'px', 
            top:y + 'px',
            // display: (enter)?'block':'none',
            transition: 'visibility ease-in-out .2s',
            border: '1px solid black',
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
        setState({x: e.screenX + 20 , y: e.nativeEvent.offsetY + 20});
    }

    useEffect(() => {
        console.log(state);
        console.log(enter);
        console.log(toolRef.current.getBoundingClientRect().y);
    }, [state])


    return (
        <div>
        <Comp x={state.x} y={state.y} enter={enter}/>
        <div onMouseMove={handleMouseEnter} onMouseOut={() => setEnter(false)}>
            
            {children}
        </div>
        </div>
    )
}

export default SimpleReactTooltip;