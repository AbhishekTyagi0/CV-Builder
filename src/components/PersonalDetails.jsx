import React from "react";
import "../style/personalInfo.css";
import InputField from "./inputfield";

export default function PersonalDetailsInput(props) {
  const inputHandler = (e) => {
    props.setDataValues((previousState) => {
      // console.log("Event Data", e.target, previousState);
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="personalInfoSection">
      <section className="fullName">
        <InputField
          label="Enter the Job Title"
          type="text"
          name="title"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
        <InputField
          label="LinkedIn"
          type="email"
          name="linkedin"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
      </section>

      <section className="fullName">
        <InputField
          label="First Name"
          type="text"
          name="fname"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lname"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Country"
          type="country"
          name="country"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
        <InputField
          label="City"
          type="city"
          name="city"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Address"
          type="text"
          name="address"
          inputHandler={inputHandler}
          value={props.dataValues}
        />
        <InputField
          label="Pin Code"
          type="number"
          name="pincode"
          inputHandler={inputHandler}
          value={props.dataValues}
          />
      </section>
    </div>
  );
}
