import React from "react";
import "./App.css";
import CVData from "./components/cvdata";

export default function Heading() {
  return (
    <>
      <h1 className="heading">CV Builder</h1>
      <CVData />
    </>
  );
}
