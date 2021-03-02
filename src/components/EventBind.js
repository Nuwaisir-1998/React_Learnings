import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // part of the 3rd approach
        // this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            message: "GoodBye"
        })
        console.log(this)
    }
    
    clickHandler4thOption = () => {
        this.setState({
            message: 'GoodBye'
        })
    }

    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                {/* 1st approach (has performance issues)*/}
                {/* <button onClick={this.clickHandler.bind(this)}> Click </button> */}

                {/* 2nd approach */}
                {/* <button onClick={() => this.clickHandler()}> Click </button> */}

                {/* 3rd approach (maybe more preffered) */}
                {/* bind in the constructor */}
                {/* <button onClick={this.clickHandler}> Click </button> */}

                {/* 4th option (preffered) */}
                <button onClick={this.clickHandler4thOption}> Click </button>
            </div>
        )
    }
}

export default EventBind
