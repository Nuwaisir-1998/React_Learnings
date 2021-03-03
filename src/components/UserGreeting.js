import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {

        // option 1
        if(this.state.isLoggedIn) {
            return (
                <div>
                    Welcome
                </div>
            )
        }else{
            return (
                <div>
                    <div> Another Welcome </div>
                </div>
            )
        }

        // option 2
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div> Welcome to You </div>
        // }else {
        //     message = <div> Welcome Guest </div>
        // }
        // return <div>{message}</div>

        // option 3
        // return (
        //     this.state.isLoggedIn ? 
        //     <div> Welcom to You </div> :
        //     <div> Welcome Guest </div>
        // )

        // option 4 (display something or nothing)
        // return this.state.isLoggedIn && <div> Welcome to You </div>
    }
}

export default UserGreeting
