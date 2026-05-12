import React, { Component } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./styles.css";
import CategorySliderCard from "./CategorySliderCard";
class CategorySlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc",
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd",
        },
        {
          img: "https://dummyimage.com/600x400/000/fff",
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222",
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
        {
          img: "https://dummyimage.com/600x400/000/ccccc",
        },
        {
          img: "https://dummyimage.com/600x400/000/dddddd",
        },
        {
          img: "https://dummyimage.com/600x400/000/B22222",
        },
        {
          img: "https://dummyimage.com/600x400/000/7CFC00",
        },
      ],
    };
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div>
        {/* <Slider {...settings}>
          {this.props.categories.map((item, index) => {
            return (
              <div key={index}>
                <CategorySliderCard item={item} />
              </div>
            );
          })}
        </Slider> */}
      </div>
    );
  }
}

export default CategorySlider;
