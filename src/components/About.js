import React, { Component } from 'react'

export default class About extends Component {
    
  render() {
    return (
      <div className='container'>
        <div className="card text-center bg-dark text-secondary-emphasis my-3" data-bs-theme="dark">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">About This website</h5>
            <p className="card-text"> This website is build with SoundCloud embed api service </p>
          </div>
          <div className="card-footer text-muted">
            
          </div>
        </div>
      </div>
    )
  }
}
