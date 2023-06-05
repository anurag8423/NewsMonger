import React, { Component } from 'react'
import spinne from './Spinner-1s-200px.gif'
export class spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src={spinne} alt="spinner"/>
      </div>
    )
  }
}

export default spinner
