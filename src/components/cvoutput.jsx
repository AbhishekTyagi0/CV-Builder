import React from "react";

const Cvoutput = (props) => {
  return (
    <>
      <section className="cvContainer">
        <div className="cvHeading">
          <h1>{props.dataValues.fname + " " + props.dataValues.lname}</h1>
          <h3>{props.dataValues.title}</h3>
        </div>
        <div className="cv-detail-field">
          <p>{props.dataValues.email}</p>
          <p>{props.dataValues.phone}</p>
          <p>{props.dataValues.linkedin}</p>
          <p>{props.dataValues.address + ", " + props.dataValues.pincode}</p>
        </div>
      </section>
      <div className="userTextOutput">
        <p>{props.postText.textArea}</p>
      </div>
    </>
  );
};

export default Cvoutput;
