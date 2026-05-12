import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// CSS Module
import styles from "@/styles/Notifications.module.css";
// IMGS
import logo2 from "../../assets/img/logo2.png";
import alertblue from "../../assets/img/alertblue.png";
import profile from "../../assets/img/icon.png";
import { GetNotification, MakeNotificationRead } from "../../Apis/Notification";
const NavBar = () => {
  const [user, setuser] = useState(null);
  const [showNotify, setShowNotify] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState(null);

  const notifyMenuRef = useRef();
  const notifyImgRef = useRef();
  const allReadRef = useRef();

  const profileMenuRef = useRef();
  const profileImgRef = useRef();
  const getAllNoty = async () => {
    const res = await GetNotification();
    setNotifications(res?.results);
    setNotificationsCount(res?.count);
    console.log(res);
  };
  const MarkAsRead = async () => {
    const res = await MakeNotificationRead();
    if (res) {
      getAllNoty();
      setShowNotify(false);
    }
  };
  useEffect(() => {
    getAllNoty();
    if (typeof window !== "undefined") {
      setuser(localStorage?.getItem("user"));
    }

    window.addEventListener("click", (e) => {
      if (
        e.target !== notifyMenuRef &&
        e.target !== notifyImgRef.current &&
        e.target !== allReadRef.current
      ) {
        setShowNotify(false);
      }
      if (e.target !== profileMenuRef && e.target !== profileImgRef.current) {
        setShowProfile(false);
      }
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg bg-white d-none d-lg-flex"
      style={{
        boxShadow: "0px 18px 40px 0px rgba(0, 0, 0, 0.06)",
        height: "80px",
      }}
    >
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src={logo2}
            alt="Next.js Logo"
            width={80}
            height={50}
            priority
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              className={`${router.pathname === "/" ? "active" : ""} nav-item`}
            >
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/products/all" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/products/all">
                Our products
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/requests" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/requests">
                My orders
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/contactus" ? "active" : ""
              } nav-item`}
            >
              <Link className="nav-link" href="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center gap-4">
            {user ? (
              <>
                <div className="position-relative">
                  <Image
                    ref={notifyImgRef}
                    onClick={() => {
                      setShowNotify((old) => !old);
                    }}
                    style={{ cursor: "pointer" }}
                    src={alertblue}
                    alt="Next.js Logo"
                    width={30}
                    height={30}
                    priority
                  />
                  <div
                    className="position-absolute text-white rounded-5 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "red",
                      top: "-5px",
                      left: "-8px",
                      width: "20px",
                      height: "20px",
                      fontSize: "12px",
                    }}
                  >
                    {notificationsCount}
                  </div>

                  {showNotify && (
                    <div
                      ref={notifyMenuRef}
                      className="position-absolute bg-white p-3 rounded-3"
                      style={{
                        top: "35px",
                        boxShadow: "0px 18px 40px 0px #00000029",
                        right: "10px",
                        width: "430px",
                        fontSize: "16px",
                        transition: "all 0.5s ease-in-out",
                        zIndex: "11111",
                      }}
                    >
                      <h6
                        ref={allReadRef}
                        className="text-primary text-end fw-bold"
                        style={{ cursor: "pointer" }}
                        onClick={MarkAsRead}
                      >
                        Make all as read
                      </h6>
                      {!notifications[0]?.read && (
                        <h6 className="fw-bold">New</h6>
                      )}

                      {notifications?.map((item, i) => (
                        <div
                          key={i}
                          className="box-new-notify"
                          style={
                            {
                              // borderBottom: "0.5px solid #828282",
                            }
                          }
                        >
                          <div
                            className={`${styles.notifyItem} ${
                              !item?.read && styles.new
                            }`}
                          >
                            {item?.message}
                            {/* <div
                              className="offer position-absolute"
                              style={{
                                top: "5px",
                                right: "5px",
                                background: "#C3EFB9",
                                color: "#219653",
                                padding: "0 12px",
                                fontSize: "12px",
                                borderRadius: "12px",
                              }}
                            >
                              Offer
                            </div> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <div className="position-relative">
                    <Image
                      ref={profileImgRef}
                      onClick={() => {
                        setShowProfile((old) => !old);
                      }}
                      style={{ cursor: "pointer" }}
                      src={profile}
                      alt="Next.js Logo"
                      width={35}
                      height={35}
                      priority
                    />
                    {showProfile && (
                      <div
                        ref={profileMenuRef}
                        className="position-absolute py-3 bg-white rounded-3"
                        style={{
                          top: "40px",
                          boxShadow: "0px 18px 40px 0px #00000029",
                          right: "10px",
                          width: "130px",
                          fontSize: "16px",
                          textAlign: "center",
                          zIndex: "11111",
                        }}
                      >
                        <Link href="/edit-info" className="text-black">
                          Profile
                        </Link>
                        <div>
                          <Link href="/orders" className="text-black">
                            Orders History
                          </Link>
                        </div>

                        <div
                          style={{
                            cursor: "pointer",
                          }}
                          className="text-primary mt-2"
                          onClick={() => {
                            localStorage.removeItem("user");
                            setShowProfile(null);
                            setuser(null);
                            router.push("/");
                          }}
                        >
                          Log Out
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  href={"/login"}
                  className="btn btn-outline-success me-2"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#0F4392",
                    color: "#0F4392",
                    width: "100px",
                  }}
                >
                  sign in
                </Link>

                <Link
                  href={"/register"}
                  className="btn btn-outline-success"
                  style={{
                    color: "white",
                    backgroundColor: "#0F4392",
                    width: "100px",
                  }}
                  type="submit"
                >
                  sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
