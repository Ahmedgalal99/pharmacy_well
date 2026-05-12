import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import alert from "../../assets/img/alert.png";
import alertBlue from "../../assets/img/alertblue.png";

import profile from "../../assets/img/Avatar.png";
import userSvg from "../../assets/img/user.svg";
import back from "../../assets/img/Leftwhite.png";
import logoImg from "../../assets/img/logo2.png";
import { GetNotification } from "@/Apis/Notification";

const NavBarMobail = ({
  logo = false,
  titlePage = "",
  sectionRight = true,
  bgColor = "#0F4392",
  className,
}) => {
  const [user, setuser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();
  const [notificationsCount, setNotificationsCount] = useState(null);

  const getAllNoty = async () => {
    const res = await GetNotification();
    setNotificationsCount(res?.count);
  };

  useEffect(() => {
    getAllNoty();
  }, []);
  const profileMenuRef = useRef();
  const profileImgRef = useRef();

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      setuser(localStorage?.getItem("user"));
    }

    window.addEventListener("click", (e) => {
      if (e.target !== profileMenuRef && e.target !== profileImgRef.current) {
        setShowProfile(false);
      }
    });
  }, []);

  return (
    <div
      className={`d-flex justify-content-between align-items-center pt-4 pb-4 px-3 d-flex d-md-none rounded-bottom w-100 ${className}`}
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <div>
        {logo ? (
          <Image
            src={logoImg}
            alt="Next.js Logo"
            // width={12}
            // height={12}
            priority
          />
        ) : (
          <div
            className="d-flex justify-content-center align-items-center border rounded-3"
            style={{ width: "24px", height: "24px" }}
            onClick={handleGoBack}
          >
            <Image
              src={back}
              alt="Next.js Logo"
              width={12}
              height={12}
              priority
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-white fw-bold">{titlePage}</h3>
      </div>
      <div>
        {sectionRight ? (
          <div className="d-flex justify-content-center align-items-center gap-2">
            {user ? (
              <>
                <Link href="/notifications" className="position-relative">
                  <Image
                    src={logo ? alertBlue : alert}
                    alt="Next.js Logo"
                    width={24}
                    height={24}
                    priority
                  />
                  <div
                    className="position-absolute text-white rounded-5 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: "red",
                      top: "-5px",
                      left: "-8px",
                      width: "15px",
                      height: "15px",
                      fontSize: "10px",
                    }}
                  >
                    {notificationsCount}
                  </div>
                </Link>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="position-relative">
                    <Image
                      ref={profileImgRef}
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowProfile((old) => !old)}
                      src={logo ? userSvg : profile}
                      alt="Next.js Logo"
                      width={30}
                      height={30}
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
                  className="btn btn-outline-success me-2 d-none d-md-block"
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
                  className="btn btn-outline-success d-none d-md-block"
                  style={{
                    color: "white",
                    backgroundColor: "#0F4392",
                    width: "100px",
                  }}
                  type="submit"
                >
                  sign up
                </Link>

                <Link
                  href={"/login"}
                  className="btn btn-sm btn-outline-success me-1 px-1 d-block d-md-none"
                  style={{
                    backgroundColor: "white",
                    borderColor: "#0F4392",
                    color: "#0F4392",
                    width: "55px",
                  }}
                >
                  sign in
                </Link>

                <Link
                  href={"/register"}
                  className="btn btn-sm btn-outline-success d-block d-md-none"
                  style={{
                    color: "white",
                    backgroundColor: "#0F4392",
                    width: "55px",
                  }}
                  type="submit"
                >
                  sign up
                </Link>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default NavBarMobail;
