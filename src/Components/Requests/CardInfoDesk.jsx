import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const CardInfoDesk = ({ user }) => {
  return (
    <div
      className="w-100 d-flex justify-content-start align-items-center py-3 px-3"
      style={{ backgroundColor: "white", borderRadius: "10px" }}
    >
      <div className="w-100 m-3 d-flex justify-content-start align-items-center gap-4 position-relative">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div>
            <p
              className="mb-3"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Name:{" "}
              <span style={{ color: "#DD1717", fontSize: "17px" }}>
              {user?.first_name}

              </span>
            </p>
            <p
              className="mb-0"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Room Number: <span style={{ color: "#DD1717" }}>                {user?.room}
</span>
            </p>
            <div className="position-absolute top-0 end-0 d-flex justify-content-center align-items-center gap-3">
              <FontAwesomeIcon
                icon={faPen}
                style={{ fontSize: 15, color: "#0F4392" }}
              />
              <span className="text-primary fw-bold fs-5">Edit info</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-start flex-row align-items-center mb-3">
          <div>
            <p
              className="mb-3"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Hotel:{" "}
              <span style={{ color: "#DD1717", fontSize: "17px" }}>
              {user?.hotel}

              </span>
            </p> 
            <p
              className="mb-0"
              style={{ color: "black", fontWeight: "bold", fontSize: "17px" }}
            >
              Phone Number:{" "}
              <span style={{ color: "#DD1717" }}>                {user?.phone}
</span>
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-start flex-row align-items-center mb-3"></div>
      </div>
    </div>
  );
};

export default CardInfoDesk;
