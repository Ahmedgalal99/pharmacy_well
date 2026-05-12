import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slid1 from "../../assets/desk/shopping.png";

const SliderOffer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper w-100">
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                height: "234px",
              }}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                  textAlign: "center",
                  fontSize: "28px !important",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                20 % off on your first purchase
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "45%",
                  fontSize: "16px !important",
                  color: "black",
                }}
              >
                Any description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)
              </p>
              <button
                className="btn btn-primary w-25 bubbly-button2 "
                style={{ fontSize: "18px" }}
              >
                Get this offer
              </button>
              <p
                style={{
                  fontSize: "16px !important",
                }}
                className="my-2 text-primary fw-bold"
              >
                Check offers
              </p>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                height: "234px",
              }}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                  textAlign: "center",
                  fontSize: "28px !important",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                20 % off on your first purchase
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "45%",
                  fontSize: "16px !important",
                  color: "black",
                }}
              >
                Any description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)
              </p>
              <button
                className="btn btn-primary w-25 bubbly-button2"
                style={{ fontSize: "18px" }}
              >
                Get this offer
              </button>
              <p
                style={{
                  fontSize: "16px !important",
                }}
                className="my-2 text-primary fw-bold"
              >
                Check offers
              </p>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div
              style={{
                height: "234px",
              }}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "6px",
                  textAlign: "center",
                  fontSize: "28px !important",
                  color: "black",
                  textTransform: "uppercase",
                }}
              >
                20 % off on your first purchase
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "45%",
                  fontSize: "16px !important",
                  color: "black",
                }}
              >
                Any description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)
              </p>
              <button
                className="btn btn-primary w-25 bubbly-button2"
                style={{ fontSize: "18px" }}
              >
                Get this offer
              </button>
              <p
                style={{
                  fontSize: "16px !important",
                }}
                className="my-2 text-primary fw-bold"
              >
                Check offers
              </p>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}

      {/* <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators" style={{ marginBottom: 0 }}>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              style={{
                height: "234px",
              }}
              className="d-flex justify-content-center align-items-center flex-column">
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  textAlign: "center",
                  fontSize: "28px !important",
                }}>
                20 % off on your first purchase
              </p>
              <p
                style={{
                  textAlign: "center",
                  width: "300px",
                  fontSize: "13px !important",
                }}>
                Any description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)Any description (lorem ipsum)Any
                description (lorem ipsum)
              </p>
              <button
                style={{
                  backgroundColor: "#0F4392",
                  width: "200px",
                  border: "none",
                  color: "white",
                  height: "28px",
                  borderRadius: "4px",
                }}>
                Get this offer
              </button>
              <p
                style={{
                  fontSize: "13px !important",
                }}
                className="my-2"
              >
                Check offers
              </p>
            </div>
          </div>
          <div class="carousel-item"></div>
          <div class="carousel-item">
            <Image
              src={slid1}
              alt="Next.js Logo"
              width={50}
              height={30}
              priority
            />{" "}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default SliderOffer;
