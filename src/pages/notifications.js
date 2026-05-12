import React, { useEffect, useState } from "react";
import Header from "../Components/Ulits/Header";
import styles from "@/styles/Notifications.module.css";
import NavBarMobail from "../Components/desk/NavBarMobail";
import { GetNotification, MakeNotificationRead } from "../Apis/Notification";
import { useRouter } from "next/router";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState(null);
  const router = useRouter();

  const getAllNoty = async () => {
    const res = await GetNotification();
    console.log(res, "notificationsCount");
    setNotifications(res?.results);
    setNotificationsCount(res?.count);
  };
  const MarkAsRead = async () => {
    const res = await MakeNotificationRead();
    if (res) {
      getAllNoty();
      router.push("/");
    }
  };
  useEffect(() => {
    getAllNoty();
  }, []);
  return (
    <main className={styles.main} style={{ backgroundColor: "#eaeaea" }}>
      <div className="w-100 text-center d-flex justify-content-center align-items-center flex-column">
        <NavBarMobail titlePage="Notifications" />
      </div>
      <div
        className="w-100 d-flex mt-3 justify-content-center align-items-center flex-column"
        style={{ backgroundColor: "white", borderRadius: "4px" }}
      >
        <div className="w-100 d-flex justify-content-start me-5 mt-3 align-items-center flex-row-reverse">
          <p onClick={MarkAsRead} style={{ color: "#2C6ECB", fontSize: 16 }}>
            mark all as read
          </p>
        </div>

        <div
          style={{ width: "95%" }}
          className="d-flex justify-content-start ms-3 mt-3 align-items-center"
        >
          {!notifications?.[0]?.read && (
            <p style={{ fontWeight: "bold" }}>new</p>
          )}
        </div>
        {notifications?.map((item) => (
          <>
            <div
              style={{ backgroundColor: !item?.read ? "#E7ECF4" : "#eaeaea" }}
              className="d-flex justify-content-center my-2 py-2 align-items-start boxnotify flex-column"
            >
              <p className="titlenotify ms-3 mb-0">{item?.message}</p>

              {/* <div className="offergreen">
                <p className="txtoffergreen">Offer</p>
              </div> */}
            </div>

            <div
              style={{ backgroundColor: "grey", width: "95%", height: "1px" }}
            ></div>
          </>
        ))}
      </div>
    </main>
  );
};

export default Notifications;
