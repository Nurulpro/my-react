import React, { Component } from 'react';
import ReactDom from 'react-dom';

class RenderD extends Component {

    Myfun(){
var container =document.getElementById("myid");
var element = <h1>My Name is Nurul Islam I am from ReactDom</h1>
var callback = function(){
    alert("Hi I am from call back");
}

    ReactDom.hydrate(element,container,callback);

    }
    render() {
        return (
            <div>
                <button onClick={this.Myfun}>Change</button>
                <h1 id="myid" >I am from change react dom</h1>
            </div>
        );
    }
}

export default RenderD;