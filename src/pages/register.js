import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BottomNav from "@/Components/Ulits/BottomNav";
import FooterDesk from "@/Components/desk/FooterDesk";
import { GetHotels, GetHotelsDetails, GetRooms, Register } from "@/Apis/Auth";
import styles from "@/styles/storefront.module.css";
import { StorefrontNav } from "@/Components/storefront/StorefrontShared";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [name, setName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [phone, setPhone] = useState("");
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      const [hotelsRes, roomsRes] = await Promise.all([GetHotels(), GetRooms()]);
      setHotels(hotelsRes?.results || []);
      setRooms(roomsRes?.results || []);
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    const loadHotelRooms = async () => {
      if (!hotelId) return;
      const res = await GetHotelsDetails({ hotel_id: hotelId });
      setRooms(res?.rooms || []);
    };

    loadHotelRooms();
  }, [hotelId]);

  const submit = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    await Register({
      password,
      hotel_id: hotelId,
      phone,
      room_id: roomId,
      first_name: name,
    });
    setIsSubmitting(false);
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Sign Up | Pharmacy Well</title>
      </Head>

      <StorefrontNav />

      <section className={styles.authSection}>
        <div className={`${styles.container} ${styles.authLayout}`}>
          <div className={styles.authShowcase}>
            <span className={styles.eyebrow}>Create your account</span>
            <h1 className={styles.authShowcaseTitle}>
              Join the pharmacy flow in the same redesigned storefront.
            </h1>
            <p className={styles.authShowcaseText}>
              Sign-up now matches the new Egapteka-style direction, with a cleaner hotel and room flow that feels
              connected to the rest of the product experience.
            </p>

            <div className={styles.authPills}>
              <span className={styles.authPill}>Hotel delivery setup</span>
              <span className={styles.authPill}>Fast request checkout</span>
              <span className={styles.authPill}>One consistent UI</span>
            </div>

            <div className={styles.authStats}>
              <div className={styles.authStat}>
                <strong>Step 1</strong>
                <span>Create your account details before placing a pharmacy request.</span>
              </div>
              <div className={styles.authStat}>
                <strong>Step 2</strong>
                <span>Choose your hotel and room so delivery can reach you faster.</span>
              </div>
            </div>
          </div>

          <div className={styles.authCard}>
            <div className={styles.authHeader}>
              <span className={styles.eyebrow}>Account setup</span>
              <h2>Sign up</h2>
              <p>
                Already have an account? <Link href="/login" className={styles.authLink}>Sign in here</Link>.
              </p>
            </div>

            <form
              className={styles.authForm}
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <div className={styles.authField}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Write your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className={styles.authField}>
                <label htmlFor="phone">Phone number</label>
                <ReactPhoneInput
                  placeholder="01234567890"
                  disableDropdown
                  disableCountryCode
                  country="eg"
                  value={phone}
                  onChange={setPhone}
                  inputProps={{ id: "phone", name: "phone" }}
                />
              </div>

              <div className={styles.authField}>
                <label htmlFor="hotel">Hotel name</label>
                <select id="hotel" value={hotelId} onChange={(event) => setHotelId(event.target.value)}>
                  <option value="">Select hotel name</option>
                  {hotels.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.authField}>
                <label htmlFor="room">Room number</label>
                <select id="room" value={roomId} onChange={(event) => setRoomId(event.target.value)}>
                  <option value="">Select room number</option>
                  {rooms.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.room_number}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.authField}>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <button type="submit" className={styles.primaryButton} style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </form>

            <p className={styles.authNote}>
              After sign-up you can move straight into browsing products, building a cart, and requesting pharmacy
              delivery to your hotel.
            </p>
          </div>
        </div>
      </section>

      <FooterDesk />

      <div className={styles.mobileOnly}>
        <BottomNav />
      </div>
    </div>
  );
}
