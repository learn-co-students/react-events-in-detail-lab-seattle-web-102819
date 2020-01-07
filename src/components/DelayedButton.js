// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    // onDelayedClick = this.props.onDelayedClick

    // delay = this.props.delay

    // setTimeout = setTimeout ((event) => {
    //     const timeoutEvent = event.target
    //     this.onDelayedClick(timeoutEvent)
    // }, this.delay)

    handleClick = event => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render(){
        console.log(this.onDelayedClick)
        return <button onClick={this.handleClick}>Delayed Button</button>
    }
}

export default DelayedButton