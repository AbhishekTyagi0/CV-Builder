import React from "react";
import Heading from "../components/PersonalDetails";
import "../style/userInput.css";

export default function Input({ dataValues, setDataValues }) {
  return (
    <div className="personalDetailSection">
      <h2 className="personalDetailHeading">Personal Details</h2>

      <section>
        <Heading dataValues={dataValues} setDataValues={setDataValues} />
      </section>
    </div>
  );
}
