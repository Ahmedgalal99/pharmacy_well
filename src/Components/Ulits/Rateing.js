import React from "react";
import Image from "next/image";
import terrible from "../../assets/img/star_terrible.png";
import bad from "../../assets/img/star_bad.png";
import ok from "../../assets/img/star_ok.png";
import greet from "../../assets/img/star_great.png";
import good from "../../assets/img/star_good.png";
import terribleGold from "../../assets/img/terribleGold.png";
import badGold from "../../assets/img/badGold.png";
import okGold from "../../assets/img/okGold.png";
import goodGold from "../../assets/img/goodGold.png";
import greetGold from "../../assets/img/greetGold.png";

const Rateing = ({ rate, setRate }) => {
  const handleStarClick = (selectedRating) => {
    setRate(selectedRating);
  };

  const renderStars = () => {
    const starImgs = [
      { imgSrc: terrible, nameImg: "Terrible", targetImg: terribleGold },
      { imgSrc: bad, nameImg: "Bad", targetImg: badGold },
      { imgSrc: ok, nameImg: "Ok", targetImg: okGold },
      { imgSrc: good, nameImg: "Good", targetImg: goodGold },
      { imgSrc: greet, nameImg: "Greet", targetImg: greetGold },
    ];
    const starElements = starImgs.map((item, index) => {
      return (
        <div
          key={index}
          className="d-flex flex-column justify-content-center align-items-center"
          onClick={() => handleStarClick(index + 1)}
        >
          <Image
            key={index}
            src={index + 1 === rate ? item.targetImg : item.imgSrc}
            alt={item.nameImg}
          />
          <span className="fs-6 fw-bolder mt-1">{item.nameImg}</span>
        </div>
      );
    });
    return starElements;
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        {renderStars()}
      </div>
    </div>
  );
};

export default Rateing;
