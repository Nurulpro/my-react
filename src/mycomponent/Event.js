import React, { Component } from 'react';

class Refresh extends Component{
constructor(){
    super()

    this.refreshnow=this.refreshnow.bind(this)
}

refreshnow(){

    this.forceUpdate()
}


    render()
    {

        return(
            <div>

                <button onClick={this.refreshnow}>Represh</button>
                <h1>{Math.random()}</h1>
            </div>
        )
    }
}

export default Refresh