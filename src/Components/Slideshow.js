import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import user from "../assets/img/pandolproduct.png";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const Slideshow = () => {
  return (
    <Carousel
      renderThumbs={() =>
        images.map((thumbnail) => (
          <img src={thumbnail.thumbnail} key={thumbnail.thumbnail} />
        ))
      }
      showIndicators={false}
      style={{ backgroundColor: "white", width: "100%" }}
    >
      <div
        style={{
          backgroundColor: "white",
          marginTop: "10px",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <Image
          //  className="w-20"
          src={user}
          style={{ width: "27%" }}
          alt="Next.js Logo"
          width={259}
          height={200}
          priority
        />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Image
          //  className="w-20"
          src={user}
          style={{ width: "27%" }}
          alt="Next.js Logo"
          width={259}
          height={152}
          priority
        />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <Image
          //  className="w-20"
          src={user}
          style={{ width: "27%" }}
          alt="Next.js Logo"
          width={259}
          height={152}
          priority
        />
      </div>
    </Carousel>
  );
};

export default Slideshow;
