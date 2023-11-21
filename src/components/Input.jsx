import React from "react";
import PersonalDetailsInput from "../components/PersonalDetails";
import "../style/userInput.css";
import "../style/cvstyle.css";
import TextAreaInput from "./aboutself/textarea";

export default function Input({
  dataValues,
  setDataValues,
  postText,
  setPostText,
}) {
  return (
    <div className="personalDetailSection">
      <h2 className="personalDetailHeading">Personal Details</h2>
      <section>
        <PersonalDetailsInput
          dataValues={dataValues}
          setDataValues={setDataValues}
        />
      </section>
      <div className="textInput textInputArea">
        <h3>Professional Summary</h3>
        <TextAreaInput postText={postText} setPostText={setPostText} />
      </div>
    </div>
  );
}