import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SerachBar from "../Components/SerachBar";
import CardBanner from "../Components/cardBanner";
import Service from "../assets/img/service.png";
import Service2 from "../assets/img/service2.png";
import Service3 from "../assets/img/service3.png";
import getAllReviews from "../Apis/Testimonails";
import "react-phone-input-2/lib/style.css";
import OurServicesCard from "@/Components/OurServicesCard";
import Testimonial from "@/Components/Testimonial";
import getallCategories from "../Apis/Category";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Steps from "../Components/desk/Steps";
import step1 from "../assets/desk/step1.png";
import step2 from "../assets/desk/step2.png";
import step3 from "../assets/desk/step3.png";
import cart from "../assets/desk/shopping.png";
import line from "../assets/desk/line.png";
import maik from "../assets/desk/maik.png";
import CategorySliderDesk from "../Components/desk/CategorySliderDesk";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import FooterDesk from "../Components/desk/FooterDesk";
import SliderOffer from "../Components/desk/SliderOffer";
import NavBar from "../Components/desk/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import BottomNav from "@/Components/Ulits/BottomNav";
import NavBarMobail from "@/Components/desk/NavBarMobail";
import SliderCategory from "../Components/SliderCategory";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import CardBestProduct from "../Components/products/CardBestProduct";
import CardProduct from "../Components/products/CardProduct";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import Head from "next/head";
import SizesExample from "@/Components/Spinner";
import { AllBestSellersProducts } from "@/Apis/products";
import { useRouter } from "next/router";
import en from "../../locales/en";
import rs from "../../locales/rs";

export default function Main() {
  const [open, setOpen] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const [phone, setphone] = useState("us");
  const [categories, setcateogies] = useState([]);
  const [products, setbestProducts] = useState([]);
  const router = useRouter();
  function navigateTo(url) {
    router.push(url);
  }
  const getHomeData = async () => {
    const res = await getallCategories();
    const BestSellers = await AllBestSellersProducts();
    console.log(BestSellers, "BestSellers");
    setbestProducts(BestSellers?.results);
    setcateogies(res);

    setisLoading(false);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const [reviews, setReviews] = useState([]);
  const getReviewsData = async () => {
    const res = await getAllReviews();
    setReviews(res?.results);
    return res;
  };
  useEffect(() => {
    getReviewsData();
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  const { locale, locales, push } = useRouter();
  const lang = locale === "en" ? en : rs;

  const handleChangeLang = (l) => {
    push("/", "/", { locale: l });
    // if(l === "en") {
    //   push("/")
    //   console.log("en");
    // } else {
    //   push("/rs")
    // }
  };

  return (
    <div className="home padding-bottom-sm">
      {/* <h1>{locale}</h1>
      <h2>{lang.home}</h2>
      <div>
        {locales?.map((l) => {
          return (
            <button
              key={l}
              className="text-black"
              onClick={() => handleChangeLang(l)}
            >
              {l}
            </button>
          );
        })}
      </div> */}
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS?.init();</script> */}
      </Head>
      <NavBar />
      {isLoading ? (
        <SizesExample />
      ) : (
        <>
          <div className="container text-center mt-0 mt-md-3 pb-4">
            <SerachBar showBigScreen={true} />

            <div className="d-sm-none">
              <main style={{ backgroundColor: "#eaeaea" }}>
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <NavBarMobail
                    logo={true}
                    sectionRight={true}
                    bgColor="#eaeaea"
                    className="animate__animated animate__fadeInDown"
                  />
                  <SerachBar showBigScreen={false} />

                  <Swiper
                    spaceBetween={30}
                    autoplay={{
                      delay: 2500,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div
                        className="fs-6 rounded-3 d-flex justify-content-center align-items-center text-white"
                        style={{ backgroundColor: "#0F4392", height: "165px" }}
                      >
                        <Row>
                          <Col xs={5}>
                            <Image src={step1} className="w-100" alt="" />
                          </Col>
                          <Col xs={7}>
                            <h4 className="text-start ms-4">How it Works</h4>
                            <div className="d-flex flex-column align-items-start">
                              <span style={{ fontSize: "12px" }}>Step 1</span>
                              <h5 className="my-1 fw-normal">
                                Select your products
                              </h5>
                              <span
                                className="text-start"
                                style={{
                                  fontSize: "12px",
                                  lineHeight: "1.2rem",
                                }}
                              >
                                You can contact our pharmacists for help and
                                consultations
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="fs-6 rounded-3 d-flex justify-content-center align-items-center text-white"
                        style={{
                          backgroundColor: "#0F4392",
                          height: "165px",
                        }}
                      >
                        <Row>
                          <Col xs={5}>
                            <Image src={step1} alt="" className="w-100" />
                          </Col>
                          <Col xs={7}>
                            <h4 className="text-start ms-4">How it Works</h4>
                            <div className="d-flex flex-column align-items-start">
                              <span style={{ fontSize: "12px" }}>Step 2</span>
                              <h5 className="my-1 fw-normal">
                                {" "}
                                confirm your order
                              </h5>
                              <span
                                className="text-start"
                                style={{
                                  fontSize: "12px",
                                  lineHeight: "1.2rem",
                                }}
                              >
                                We will contact you with prices before we ship
                                the order to you
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div
                        className="fs-6 rounded-3 d-flex justify-content-center align-items-center text-white"
                        style={{ backgroundColor: "#0F4392", height: "165px" }}
                      >
                        <Row>
                          <Col xs={5}>
                            <Image src={step1} alt="" className="w-100" />
                          </Col>
                          <Col xs={7}>
                            <h4 className="text-start ms-4">How it Works</h4>
                            <div className="d-flex flex-column align-items-start">
                              <span style={{ fontSize: "12px" }}>Step 3</span>
                              <h5 className="my-1 fw-normal">
                                shipment and delivery
                              </h5>
                              <span
                                className="text-start"
                                style={{
                                  fontSize: "12px",
                                  lineHeight: "1.2rem",
                                }}
                              >
                                After confirming your order price, we will
                                deliver the order to your address
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* <div
                    ref={sliderRef}
                    className="keen-slider mt-2 animate__animated animate__zoomIn"
                  >
                    <div
                      className="keen-slider__slide number-slide1 fs-6 rounded-3"
                      style={{ backgroundColor: "#0F4392", height: "165px" }}
                    >
                      <Row>
                        <Col xs={5}>
                          <Image src={step1} className="w-100" alt="" />
                        </Col>
                        <Col xs={7}>
                          <h4 className="text-start ms-4">How it Works</h4>
                          <div className="d-flex flex-column align-items-start">
                            <span style={{ fontSize: "12px" }}>Step 1</span>
                            <h5 className="my-1 fw-normal">
                              Select your products
                            </h5>
                            <span
                              className="text-start"
                              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
                            >
                              You can contact our pharmacists for help and
                              consultations
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      className="keen-slider__slide number-slide1 fs-6 rounded-3"
                      style={{
                        backgroundColor: "#0F4392",
                        height: "165px",
                      }}
                    >
                      <Row>
                        <Col xs={5}>
                          <Image src={step1} alt="" className="w-100" />
                        </Col>
                        <Col xs={7}>
                          <h4 className="text-start ms-4">How it Works</h4>
                          <div className="d-flex flex-column align-items-start">
                            <span style={{ fontSize: "12px" }}>Step 2</span>
                            <h5 className="my-1 fw-normal">
                              {" "}
                              confirm your order
                            </h5>
                            <span
                              className="text-start"
                              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
                            >
                              We will contact you with prices before we ship the
                              order to you
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div
                      className="keen-slider__slide number-slide1 fs-6 rounded-3"
                      style={{ backgroundColor: "#0F4392", height: "165px" }}
                    >
                      <Row>
                        <Col xs={5}>
                          <Image src={step1} alt="" className="w-100" />
                        </Col>
                        <Col xs={7}>
                          <h4 className="text-start ms-4">How it Works</h4>
                          <div className="d-flex flex-column align-items-start">
                            <span style={{ fontSize: "12px" }}>Step 3</span>
                            <h5 className="my-1 fw-normal">
                              shipment and delivery
                            </h5>
                            <span
                              className="text-start"
                              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
                            >
                              After confirming your order price, we will deliver
                              the order to your address
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div> */}

                  <div className="d-flex justify-content-between align-itmes-center w-100 pt-3 px-2">
                    <h4 className="align-start m-0 pt-2 pb-2">Big deals</h4>
                    <Link href="/">
                      <span className="text-primary fs-6 fw-bold">
                        Check offers
                      </span>
                    </Link>
                  </div>

                  <div
                    ref={sliderRef}
                    className="keen-slider animate__animated animate__zoomInUp"
                    style={{
                      height: "165px",
                    }}
                  >
                    <div className="keen-slider__slide number-slide1 fs-5 bg-white rounded-3">
                      <CardBanner />
                    </div>
                    <div className="keen-slider__slide number-slide2 fs-5 bg-white rounded-3">
                      <CardBanner />
                    </div>
                    <div className="keen-slider__slide number-slide3 fs-5 bg-white rounded-3">
                      <CardBanner />
                    </div>
                  </div>
                  {categories?.length > 0 && (
                    <>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h4 className="align-start mt-2 mb-2 m-0 pt-3 pb-2">
                          Categories.
                        </h4>
                        {/* <Link
                          href="/categoriesViewall"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <p
                            className="align-start mt-2 mb-2 m-0 pt-3 pb-2 fs-6"
                            style={{ fontWeight: "bold" }}
                          >
                            View all
                          </p>
                        </Link> */}
                      </div>

                      <SliderCategory categories={categories} />
                    </>
                  )}

                  {products?.length > 0 && (
                    <>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <h4 className="align-start mt-2 mb-2 m-0 pt-3 pb-2">
                          Best seller.
                        </h4>
                        {/* <Link
                      href="#"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <p
                        className="align-start mt-2 mb-2 m-0 pt-3 pb-2 fs-6"
                        style={{ fontWeight: "bold" }}
                      >
                        View all
                      </p>
                    </Link> */}
                      </div>

                      <div className="slider-products w-100 h-100">
                        <Swiper
                          slidesPerView={2}
                          spaceBetween={5}
                          freeMode={true}
                          modules={[Autoplay, FreeMode]}
                          // autoplay={{
                          //   delay: 2500,
                          //   disableOnInteraction: false,
                          // }}
                          className="mySwiper"
                        >
                          {products?.map((item, index) => (
                            <>
                              <SwiperSlide key={index}>
                                <CardBestProduct item={item} />
                              </SwiperSlide>
                            </>
                          ))}
                        </Swiper>
                      </div>
                    </>
                  )}

                  <div className="mt-3 d-flex justify-content-start align-items-center flex-row"></div>
                  <div
                    style={{ width: "95%" }}
                    className="d-flex justify-content-between align-items-center postion-relative"
                  >
                    <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                      Our services.
                    </h4>
                    {/* <Link
                      href="/CategoriesViewall"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <p
                        className="align-start mt-2 mb-2 m-0 pt-3 pb-2 fs-6"
                        style={{ fontWeight: "bold" }}
                      >
                        View all
                      </p>
                    </Link> */}
                  </div>

                  <div
                    className="w-100 mt-3 d-flex justify-content-between align-items-center flex-column"
                    // data-aos="fade-left"
                    // data-aos-offset="500"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                  >
                    <OurServicesCard
                      image={Service}
                      title="Online doctors"
                      desc="You can consult with one of our online doctors in all specialties."
                    />

                    <OurServicesCard
                      image={Service2}
                      title="Delivery to your room"
                      desc="Make a request to receive what you want at your hotel room."
                    />
                    <OurServicesCard
                      image={Service3}
                      title="Call us"
                      desc="You can call our pharmacists to request what you want or send a prescription"
                    />
                  </div>
                  {reviews?.length > 0 && (
                    <>
                      <div
                        style={{ width: "95%" }}
                        className="d-flex justify-content-between align-items-center"
                        // data-aos="fade-right"
                        // data-aos-offset="500"
                      >
                        <h4 className=" align-start mt-2 mb-2 m-0 pt-3 pb-2">
                          Reviews
                        </h4>
                        <Link
                          href="/testimonials"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <p
                            className="align-start mt-2 mb-2 m-0 pt-3 pb-2 fs-6"
                            style={{ fontWeight: "bold" }}
                          >
                            View all
                          </p>
                        </Link>
                      </div>

                      <Swiper
                        spaceBetween={30}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                      >
                        <div className="w-100 d-flex justify-content-center align-items-center">
                          {reviews?.map((item, i) => {
                            if (i < 3) {
                              return (
                                <SwiperSlide key={i}>
                                  <Testimonial item={item} />;
                                </SwiperSlide>
                              );
                            }
                          })}
                        </div>
                      </Swiper>
                    </>
                  )}
                </div>
              </main>
            </div>
          </div>

          <div className="d-none d-md-block">
            <div className="d-flex justify-content-between align-items-start flex-column position-relative w-100">
              <div className="d-flex justify-content-start align-items-start flex-column w-100">
                <div className="d-flex justify-content-center align-items-center flex-column mt-5 w-100">
                  <h2 style={{ color: "#0F4392" }}>How it works</h2>
                  <div className="d-flex justify-content-around align-items-center position-relative">
                    <Container>
                      <Row>
                        <Col>
                          <Steps
                            imgsource={step1}
                            title="Step1"
                            text="Select your products"
                            desc="You can contact our pharmacists for help and consultations"
                            className="animate__animated animate__fadeInLeftBig"
                          />
                        </Col>
                        <Col>
                          <Steps
                            imgsource={step2}
                            title="Step2"
                            text="confirm your order"
                            desc="We will contact you with prices before we ship the order to you"
                            className="animate__animated animate__fadeInDownBig"
                          />
                        </Col>
                        <Col>
                          <Steps
                            imgsource={step3}
                            title="Step3"
                            text="shipment and delivery"
                            desc="After confirming your order price, we will deliver the order to your address"
                            className="animate__animated animate__fadeInRightBig"
                          />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
              <div
                className="d-flex justify-content-between align-items-center mt-5 getofferbox w-100 animate__animated animate__fadeIn"
                style={{ height: "290px" }}
              >
                <div
                  style={{ width: "60%", height: "280px", marginLeft: "2%" }}
                  className="position-relative d-flex justify-content-center align-items-center"
                >
                  <div
                    style={{ left: "-20px", zIndex: "111" }}
                    className="position-absolute"
                  >
                    <Image
                      src={maik}
                      style={{ width: "100%", height: "100%" }}
                      alt="Next.js Logo"
                      height={50}
                      width={50}
                      priority
                    />
                  </div>
                  <div
                    style={{ width: "100%", height: "95%" }}
                    className="position-absolute"
                  >
                    <Image
                      src={line}
                      style={{ width: "100%", height: "100%" }}
                      alt="Next.js Logo"
                      priority
                    />
                  </div>
                  <SliderOffer />
                </div>
                <div style={{ marginRight: "12rem" }}>
                  <Image
                    src={cart}
                    alt="Next.js Logo"
                    width={200}
                    height={180}
                    priority
                  />
                </div>
              </div>

              <Container>
                {categories?.length > 0 && (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center mt-5 w-100"
                    // data-aos="fade-up"
                    style={{
                      height: "310px",
                    }}
                  >
                    <h2 style={{ marginBottom: "20px", color: "#0F4392" }}>
                      Categories
                    </h2>
                    <div className="slider-category w-100 h-100 ps-3">
                      <Swiper
                        slidesPerView={6.5}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[Autoplay, FreeMode]}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        className="mySwiper"
                      >
                        {categories?.length > 0 &&
                          categories.map((item, i) => (
                            <SwiperSlide key={i}>
                              <CategorySliderDesk
                                item={item}
                                text="All medicines"
                              />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>
                  </div>
                )}

                {products?.length > 0 && (
                  <>
                    <div
                      className="d-flex flex-column justify-content-center align-items-center mt-5 w-100"
                      // data-aos="fade-up"
                      style={{
                        height: "480px",
                      }}
                    >
                      <h2 style={{ marginBottom: "20px", color: "#0F4392" }}>
                        Best seller
                      </h2>
                      <div className="slider-products w-100 h-100 ps-3">
                        <Swiper
                          slidesPerView={4}
                          spaceBetween={20}
                          freeMode={true}
                          modules={[Autoplay, FreeMode]}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          className="mySwiper"
                        >
                          {products?.map((item, index) => (
                            <>
                              <SwiperSlide key={index}>
                                <CardBestProduct item={item} />
                              </SwiperSlide>
                            </>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </>
                )}

                <div
                  className="d-flex justify-content-center align-items-center flex-column mb-5 mt-5"
                  // data-aos="flip-left"
                  style={{ width: "100%" }}
                >
                  <h2 style={{ marginBottom: 0, color: "#0F4392" }}>
                    Our services
                  </h2>

                  <div
                    className="d-flex justify-content-center align-items-center mt-5"
                    style={{ boxShadow: "0px 18px 40px 0px #0000001F" }}
                  >
                    <OurServicesCard
                      image={Service}
                      title="Online doctors"
                      desc="You can consult with one of our online doctors in all specialties."
                    />
                    <OurServicesCard
                      image={Service2}
                      title="Delivery to your room"
                      desc="Make a request to receive what you want at your hotel room."
                    />
                    <OurServicesCard
                      image={Service3}
                      title="Call us"
                      desc="You can call our pharmacists to request what you want or send a prescription"
                    />
                  </div>
                </div>
                {reviews?.length > 0 && (
                  <>
                    <div
                      className="d-flex justify-content-center align-items-center flex-column mb-5 mt-5"
                      // data-aos="flip-down"
                    >
                      <h5 style={{ marginBottom: 0, color: "#0F4392" }}>
                        Reviews
                      </h5>

                      <div className="d-flex justify-content-between align-items-center mt-5 mb-4 w-100">
                        <Swiper
                          style={{
                            height: "230px",
                          }}
                          slidesPerView={3}
                          spaceBetween={0}
                          freeMode={true}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Pagination, FreeMode]}
                          className="mySwiper"
                        >
                          <div
                            className="w-100 d-flex justify-content-center align-items-center"
                            style={{ width: "300px" }}
                          >
                            {reviews?.map((item, i) => {
                              return (
                                <SwiperSlide key={i}>
                                  <Testimonialdesk item={item} atHome={true} />
                                </SwiperSlide>
                              );
                            })}
                          </div>
                        </Swiper>
                      </div>
                    </div>
                    <div
                      className="mt-3 d-flex justify-content-center align-items-center flex-column w-100"
                      style={{ width: "100%" }}
                    >
                      <Link href="/testimonials">
                        <p
                          style={{
                            color: "#0F4392",
                            fontSize: "16px !important",
                            marginBottom: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          Check all reviews
                        </p>
                      </Link>
                    </div>
                  </>
                )}
              </Container>
            </div>
          </div>
        </>
      )}

      <FooterDesk />

      <div className="d-block d-sm-none">
        <BottomNav />
      </div>

      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
}
