import React, { useRef } from "react";
import "./App.css";
import CVData from "./components/cvdata";

export default function Heading() {
  const cvDataRef = useRef(null);

  const handleDownloadPDF = () => {
    {
      cvDataRef.current && cvDataRef.current.generatePdf();
    }
  };
  return (
    <>
      <h1 className="heading">
        CV Builder <button onClick={handleDownloadPDF}>Download PDF</button>
      </h1>
      <CVData ref={cvDataRef} />
    </>
  );
}
