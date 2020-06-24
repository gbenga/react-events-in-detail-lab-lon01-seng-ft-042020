// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }

    render() {
        return( 
            <div id="coordinates-button">
               <button onClick={this.handleClick}>Buttonnnnn</button>
            </div>
        )
    }
}