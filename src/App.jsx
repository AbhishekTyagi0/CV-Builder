import React from "react";
import './App.css'
import Input from "./components/Input";
import CVData from "./components/cvdata";


export default function Heading(){

  return (

    <>
      <h1>CV Builder</h1>
      <div className="mainContainer">
      {/* <div className="userInput">
        <Input />
      </div>
      <div className="userOutput"></div> */}
      <CVData />
      </div>
      <footer><h2>Copyrigth &copy; All rights reserved</h2></footer>
    </>
  )
}

