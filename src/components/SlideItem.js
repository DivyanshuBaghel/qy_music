import React, { Component } from 'react'

export default class SlideItem extends Component {
  render() {
    let {title,vSrc,id,ac}=this.props;
   
    return (
        <div className={`carousel-item ${ac}`} style={{height:"100vh"}}>
            <div className='d-flex' style={{height:"66.7px"}}><h1 className='text-primary'>{id}</h1><h1 className='text-light'>.{title}</h1></div>

            <div className="wrapper" style={{height:"100vh"}}>  
                 <iframe className="d-block w-100 h-600" title='Sound Cloud Music' src={vSrc} scrolling="no" frameborder="no" allow="autoplay"></iframe>
            </div>

        </div>
    )
  }
}
