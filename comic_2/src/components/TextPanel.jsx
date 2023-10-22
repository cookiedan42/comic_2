import React from 'react';
import { useState } from 'react';

export default function TextPanel({data,bottomData}) {

    const [state, setState] = useState(0);
    const size = data.length-1;

    return (
        < div class="areaDiv" style={{ flexDirection: "row" }}>
            <div>{data[state].text}</div>
            
            <img src={data[state].image} alt="" />
            <br></br>
            <button style={{ height: "50px", width: "25%", minWidth: "200px" }} onClick={() => { setState(Math.max(state - 1, 0)) }}>back</button>
            <button style={{ height: "50px", width: "25%", minWidth: "200px" }} onClick={() => { setState(Math.min(state + 1, size)) }}>next</button>
            <br></br>
        {bottomData}
        </div >
    )

} 