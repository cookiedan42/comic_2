import React, { useEffect } from 'react';
import { useState } from 'react';

export default function MoviePanel({ data: data }) {

    const [state, setState] = useState(0);
    const size = data.length-1;

    useEffect(
        () => {
            setTimeout(
                () => setState(Math.min(state + 1, size)),
                data[state].timeout
            )
        },
        [state]
    )
    return (
        < div class="areaDiv" style={{ flexDirection: "row" }} >
            <div>{data[state].text}</div>

            <img src={data[state].image} />
        </div >
    )

} 