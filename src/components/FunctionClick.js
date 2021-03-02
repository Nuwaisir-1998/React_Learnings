import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log("button click")
    }

    return (
        <div>
            {/* Don't do like onClick={clickHandler()}, it will call the function immediately*/}
            <button onClick={clickHandler}> Click </button>
        </div>
    )
}

export default FunctionClick
