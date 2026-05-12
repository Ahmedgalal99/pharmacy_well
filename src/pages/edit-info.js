import React, { useEffect } from "react";
import styles from "@/styles/confirmation.module.css";
import vector from "../assets/img/vector.png";
import Header from "../Components/Ulits/Header";

import ButtonEditInfo from "../Components/EditInfo/buttonEditInfo";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import NavBar from "../Components/desk/NavBar";
import NavBarMobaile from "../Components/desk/NavBarMobail";
import { useRouter } from "next/router";
import {
  GetHotels,
  GetHotelsDetails,
  GetRooms,
  updateUser,
} from "../Apis/Auth";
import FooterDesk from "../Components/desk/FooterDesk";
import BottomNav from "../Components/Ulits/BottomNav";
import { Breadcrumb, Button, Container } from "react-bootstrap";
import WriteReview from "../Components/Ulits/WriteReview";
import Support from "../Components/Ulits/Support";
import Link from "next/link";
import SizesExample from "../Components/Spinner";

const EditInfo = () => {
  const [phone, setphone] = useState(null);
  const [hotel_id, sethotel_id] = useState(null);
  const [room_number, setroom_number] = useState(null);
  const [isLoadingPage, setisLoadingPage] = useState(true);
  const [openReview, setOpenReview] = useState(false);

  const [name, setName] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }
  }, []);

  function handleOnChange(value) {
    setphone(value);
  }
  const router = useRouter();
  const [user, setuser] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(JSON.parse(localStorage?.getItem("user")));
    }
    setisLoadingPage(false);
  }, []);
  useEffect(() => {
    console.log(user, "ussser");
    if (user) {
    } else {
      // router.push("/");
    }
    sethotel_id(user?.hotel);
    setName(user?.first_name);
    setroom_number(user?.room);
  }, [user]);

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getHotelsData = async () => {
    const res = await GetHotels();
    setHotels(res?.results);
    return res;
  };
  const getRoomsData = async () => {
    const res = await GetRooms();
    setRooms(res?.results);
    return res;
  };
  const callupdateUser = async () => {
    updateUser({ id: user?.id, hotel: hotel_id, phone, first_name: name });
  };
  useEffect(() => {
    getHotelsData();
    getRoomsData();
  }, []);
  const getHotelsDataApi = async () => {
    const res = await GetHotelsDetails({ hotel_id });
    console.log(res);
    setRooms(res?.rooms);
    return res;
  };
  useEffect(() => {
    if (hotel_id) {
      getHotelsDataApi();
    }
  }, [hotel_id]);
  return (
    <div className="padding-bottom-sm">
      <NavBar />
      <NavBarMobaile titlePage="Edit Info" />

      <div
        className="w-100 h-100 overflow-hidden pb-3"
        style={{ background: "#eaeaea" }}
      >
        {isLoadingPage ? (
          <SizesExample />
        ) : (
          <Container>
            <Breadcrumb
              style={{ fontSize: "18px" }}
              className="d-none d-lg-block mt-3"
            >
              <Breadcrumb.Item linkAs={Link} href="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item linkAs={Link} href="/products/all">
                Our products
              </Breadcrumb.Item>
              <Breadcrumb.Item linkAs={Link} href="/requests">
                Requests
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Edit info</Breadcrumb.Item>
            </Breadcrumb>

            <div className="d-flex justify-content-center align-items-center mt-3">
              <div
                className="d-flex w-custom justify-content-center align-items-center flex-column my-2 bg-white py-4 rounded-3"
                style={{
                  boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.12)",
                }}
              >
                <h2 style={{ color: "#0F4392" }} className="m-2">
                  Edit Info
                </h2>
                <form
                  className="d-flex justify-content-center flex-column"
                  style={{ width: "90%" }}
                >
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Your Name*</label>
                    <input
                      type="text"
                      className="form-control "
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Write here"
                      value={user?.first_name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">
                      Phone Number*{" "}
                    </label>
                    <ReactPhoneInput
                      defaultCountry={"us"}
                      value={user?.phone}
                      onChange={handleOnChange}
                      className="w-100"
                    />
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1">
                      Select Hotel Name{" "}
                    </label>
                    <select
                      type="text"
                      className="form-control"
                      onChange={(e) => sethotel_id(e.target.value)}
                      id="exampleInputPassword1"
                      placeholder="Select here"
                    >
                      <option> Select Hotel Name</option>
                      {hotels.map((item) => (
                        <option
                          selected={hotel_id == item?.id}
                          value={item?.id}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group m-2">
                    <label htmlFor="exampleInputEmail1">Room Number*</label>
                    <select
                      type="text"
                      className="form-control"
                      onChange={(e) => setroom_number(e.target.value)}
                      id="exampleInputPassword1"
                      placeholder="Select here"
                    >
                      <option>Select Room Number</option>
                      {rooms?.map((item) => (
                        <option
                          selected={room_number == item?.id}
                          value={item?.id}
                        >
                          {item.room_number}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-100 d-flex justify-content-center align-items-center  mt-5">
                    <ButtonEditInfo
                      txtColor="#0F4392"
                      bckColor="white"
                      BRColor="#0F4392"
                      text="Discard"
                      onClick={() => router.push("/")}
                    />

                    <button
                      className="btn btn-primary bubbly-button p-2 m-0 w-100 fs-5"
                      type="button"
                      onClick={callupdateUser}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        )}
      </div>
      <div className="d-block d-sm-none w-100">
        <BottomNav />
      </div>
      <div className="d-none d-sm-block w-100">
        <FooterDesk />
      </div>
      <WriteReview setOpen={setOpenReview} open={openReview} />
      <Support />
    </div>
  );
};

export default EditInfo;
