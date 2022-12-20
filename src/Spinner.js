import React, { Component } from 'react'
import loader from './Walk.gif'

export class Spinner extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10}}>
        <img src={loader} alt="loader" style={{color: 'white', width: '100px', height: '100px'}}/>
      </div>
    )
  }
}

export default Spinner
