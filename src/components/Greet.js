import React from 'react'

const Greet = props => {
    // console.log(props)
    const {name, another_attr} = props
    return <h1>Hello {name} and {another_attr} </h1>
}

export default Greet