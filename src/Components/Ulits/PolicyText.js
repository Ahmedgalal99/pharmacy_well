import React from "react";

const PolicyText = ({ title, text }) => {
  return (
    <div className="policybox pt-1">
      <p className="titlepolicy" style={{ fontSize: "13px !important" }}>
        {title}
      </p>
      <p className="textpolicy" style={{ fontSize: "13px !important" }}>
        {text}
      </p>
    </div>
  );
};

export default PolicyText;
