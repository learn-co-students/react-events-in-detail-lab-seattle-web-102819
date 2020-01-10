// Code CoordinatesButton Component Here
import React from 'react'



class CoordinatesButton extends React.Component {
 


handleClick = (e) => {
    console.log(e)
    let newArray = [e.clientX, e.clientY ];
    this.props.onReceiveCoordinates(newArray)
}




    render () {
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}


export default CoordinatesButton;