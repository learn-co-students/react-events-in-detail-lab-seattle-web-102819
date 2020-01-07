// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    handleClick = event => {
        const arr = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(arr)
    }
    render () {
        return (
            <button onClick={this.handleClick}>CoordinatesButton </button>
        )
    }
}

export default CoordinatesButton