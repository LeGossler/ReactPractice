import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        this.EventHandler = this.EventHandler.bind(this)
    }
    EventHandler(){
        this.setState({
            message:"Goodbye"
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.EventHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.EventHandler()}>Click</button> */}
                <button onClick={this.EventHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
