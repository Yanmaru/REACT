import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Boutton cliqué");
    }

  render() {
    return (
      <div><button onClick={this.clickHandler}>Cliqk me class ! </button></div>
    )
  }
}

export default ClassClick