// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    onClick = (event) => {
        const coords = [event.clientX, event.clientY]
        return this.receiveCoords(coords)
    }

    receiveCoords = this.props.onReceiveCoordinates

    render() {
        return (<button
        onClick={this.onClick}
        >Coordinates Button</button>)
    }
}

export default CoordinatesButton