import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Domnode extends Component {
changeimg(){
var imgid = document.getElementById("img")
ReactDom.findDOMNode(imgid).src="https://www.etct.com.bd/products/139063032-Realme_Buds_Q_Wireless_Earphone_-_Black"

}


    render() {
        return (
            <div>
                <button onClick={this.changeimg}>Change Image</button><br></br>
                <img id="img" src="https://www.etct.com.bd/products/139063681-Haylou_Tws_Gt3_Pro_Bluetooth_Earphone"></img>
            </div>
        );
    }
}

export default Domnode;