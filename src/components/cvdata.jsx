import React, { useState } from "react";
import Input from "./Input";
import Cvoutput from "./cvoutput";
import Experience from "./experience/experiencedata";

const CVData = () => {
  const [dataValues, setDataValues] = useState({});
  const [postText, setPostText] = useState('');
  const [experience, setExperience] = useState('');


  return (
    <div className="mainContainer">
      <div className="userInput">
        <Input dataValues={dataValues} setDataValues={setDataValues} postText={postText} setPostText={setPostText}/>
        <Experience experience={experience} setExperience={setExperience}/>
      </div>
      <div className="userOutput">
        <Cvoutput dataValues={dataValues} setDataValues={setDataValues} postText={postText} setPostText={setPostText}/>
      </div>
    </div>
  );
};

export default CVData;
