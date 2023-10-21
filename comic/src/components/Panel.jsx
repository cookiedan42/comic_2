import React, { Component } from 'react';

export default class Panel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            content: <p></p>
        }
    }
    render() {
        return (
            < div class="areaDiv" style = {{ flexDirection: "row" }}>
                {/* image */ }
                <button style={{height:"50px", width:"25%", minWidth:"200px"}} onClick={()=>{}}>back</button>
                <button style={{height:"50px", width:"25%", minWidth:"200px"}} onClick={()=>{}}>next</button>
            </div >
        )

    }
}