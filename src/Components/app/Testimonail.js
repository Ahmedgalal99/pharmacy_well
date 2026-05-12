import React from "react";
import styles from "@/styles/Testimonials.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import avatar from "../../assets/img/Avatar.png";

function Testimonail() {
  return (
    <div className={styles.boxtest} style={{ backgroundColor: "white" }}>
      <div className="ms-3">
        <Image
          src={avatar}
          alt="Next.js Logo"
          width={60}
          height={60}
          priority
        />
      </div>
      <div className="ms-2 text-left" style={{ textAlign: "left" }}>
        <p className={styles.username}>user name</p>
        <div>
          <StarIcon style={{ color: "#E67136" }} />
          <StarIcon style={{ color: "#E67136" }} />
          <StarIcon style={{ color: "#E67136" }} />
          <StarIcon style={{ color: "#E67136" }} />
          <StarIcon style={{ color: "#E67136" }} />
        </div>
        <p>“Lorem ipsumLorem ipsumLorem ipsumLorem ipsum”</p>
      </div>
    </div>
  );
}

export default Testimonail;
