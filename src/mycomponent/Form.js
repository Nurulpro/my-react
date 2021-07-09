import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>My Contact Form</p>
                    <input type="text-ariea" placeholder="enter your name"></input><br></br>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Form;