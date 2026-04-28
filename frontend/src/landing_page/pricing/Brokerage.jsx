import React from "react";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
