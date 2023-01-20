import React, { Component } from 'react'
import SlideItem from './SlideItem';
import src from "./Source.json";


export default class Slider extends Component {
      src = src
      constructor(){
        super();
        this.state={
          data: this.src.source
        }
      }
      /*componentDidMount() {
      fetch(src)
        .then(response => response.json())
        .then(data => {this.setState({ data })})
        .catch(error => {
          // Handle any errors
          console.log(error)
        });
        }*/
  render() {

    return (
      <>
        <div id="carouselExampleIndicators" className="carousel slide" style={{height:"100vh"}}>
         <div className="carousel-inner container" style={{height:"100vh"}}> 
            {this.state.data.map((element)=>{
              return <SlideItem title={element.title} vSrc={element.vSrc} key={element.id} id={element.id} ac={element.ac}/>
              })}
          </div>
    
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       </>
    )
  }
}
