import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("Boutton cliqué");
    }

  return (
    <div><button onClick = {clickHandler}>Click me</button></div>
  )
}

export default FunctionClick