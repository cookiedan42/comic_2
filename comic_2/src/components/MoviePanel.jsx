import React, { useEffect } from 'react';
import { useState } from 'react';

export default function MoviePanel({data}) {

    const [state, setState] = useState(0);
    const [tb, setTB] = useState(true);
    const size = data.length-1;

    useEffect(
        () => {
            setTimeout(
                () => {setTB(Math.random()>0.5);setState(Math.min(state + 1, size))},
                data[state].timeout
            )
        },
        [state,data,size]
    )


    const top = ()=>{
        if (state===0 || tb){
            return (<div>{data[state].text}</div>);
        }
        else {
            return (<div style={{color:'white'}}>_</div>);
        }
    }
    const bot = ()=>{
        if (state===0 || tb){
            return (<div style={{color:'white'}}>_</div>);
        } else{
            return (<div>{data[state].text}</div>);
        }
    }
    return (
        < div class="areaDiv" style={{ flexDirection: "row" }} >
            {top()}
            <img src={data[state].image} alt="" />
            {bot()}
        </div >
    )

} 