import chalk5 from '../images/chalk5.jpg'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    var settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay:true,
      speed:500,
      pauseOnHover: true,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "5px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Main Technologies Used </h2>
        <Slider {...settings}>
          <div style={{textAlign:"center"}}>
          <span className="iconify" data-icon={this.props.item1} data-inline="false"style={{width:"100px", height:"100px", paddingBottom:"20px"}}></span>
          </div>
          <div style={{textAlign:"center"}}>
          <span className="iconify" data-icon={this.props.item2} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div style={{textAlign:"center"}}>
          <span className="iconify" data-icon={this.props.item3} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item4} data-inline="false"style={{color:"orange", width:"100px", height:"100px"}}></span>
          </div>
          {this.props.itemIMG2}
          <div>
          <span className="iconify" data-icon={this.props.item5} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item6} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item7} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item8} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item10} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item11} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div>
          <span className="iconify" data-icon={this.props.item12} data-inline="false"style={{width:"100px", height:"100px"}}></span>
          </div>
          <div style={{height:"100px", width:"100px"}}>
          {this.props.itemIMG}
          </div>
        </Slider>
      </div>
    );
  }
}