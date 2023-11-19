import React from "react";
import "../style/personalInfo.css";

export default function PersonalDetailsInput(props) {
  const inputHandler = (e) => {
    props.setDataValues((previousState) => {
      console.log("Event Data", e.target, previousState);
      return {
        ...previousState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const InputField = ({ label, type, name, inputHandler }) => (
    <div>
      <h4>{label}</h4>
      <input
        type={type}
        name={name}
        onChange={(e) => {
          inputHandler(e);
        }}
        value={props.dataValues[name]}
        className="inputPersonalInfo"
      />
    </div>
  );

  return (
    <div className="personalInfoSection">
      <section className="fullName">
        <InputField
          label="Enter the Job Title"
          type="text"
          name="title"
          inputHandler={inputHandler}
        />
        <InputField
          label="LinkedIn"
          type="email"
          name="email"
          inputHandler={inputHandler}
        />
      </section>

      <section className="fullName">
        <InputField
          label="First Name"
          type="text"
          name="fname"
          inputHandler={inputHandler}
        />
        <InputField
          label="Last Name"
          type="text"
          name="lname"
          inputHandler={inputHandler}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          inputHandler={inputHandler}
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          inputHandler={inputHandler}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Country"
          type="email"
          name="email"
          inputHandler={inputHandler}
        />
        <InputField
          label="City"
          type="tel"
          name="phone"
          inputHandler={inputHandler}
        />
      </section>

      <section className="fullName">
        <InputField
          label="Address"
          type="email"
          name="email"
          inputHandler={inputHandler}
        />
        <InputField
          label="Pin Code"
          type="tel"
          name="phone"
          inputHandler={inputHandler}
        />
      </section>
    </div>
  );
}
