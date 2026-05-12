import React, { useEffect, useState } from "react";
import Image from "next/image";

import OurServicesCard from "@/Components/OurServicesCard";
import Footer from "../Components/Footer";

import ver from "../assets/desk/ver.png";
import logo2 from "../assets/img/logo2.png";
import ReactPhoneInput from "react-phone-input-2";
import Link from "next/link";
import Steps from "../Components/desk/Steps";
import step1 from "../assets/desk/step1.png";
import step2 from "../assets/desk/step2.png";
import step3 from "../assets/desk/step3.png";
import cart from "../assets/desk/cart.png";
import line from "../assets/desk/line.png";
import maik from "../assets/desk/maik.png";
import descond from "../assets/desk/descond.png";
import SearchIcon from "@mui/icons-material/Search";
import CategorySliderCard from "../Components/CategorySliderCard";
import getallCategories from "../Apis/Category";
import Testimonial from "@/Components/Testimonial";

import CategorySliderDesk from "../Components/desk/CategorySliderDesk";
import Testimonialdesk from "../Components/desk/Testimonialdesk";
import FooterDesk from "../Components/desk/FooterDesk";
import SliderOffer from "../Components/desk/SliderOffer";

const desktop = () => {
  const [categories, setcateogies] = useState([]);
  const getHomeData = async () => {
    const res = await getallCategories();
    setcateogies(res?.results);
    return res;
  };
  useEffect(() => {
    getHomeData();
  }, []);
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);
  return <></>;
};

export default desktop;
