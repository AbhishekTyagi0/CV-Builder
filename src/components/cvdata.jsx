import React, { useState } from "react";
import Input from "./Input";
import Cvoutput from "./cvoutput";


const CVData = () => {
  const [dataValues, setDataValues] = useState({});

  return (
    <div>
      <div className="userInput">
        <Input dataValues={dataValues} setDataValues={setDataValues}/>
      </div>
      <div className="userOutput">
        <Cvoutput dataValues={dataValues} setDataValues={setDataValues}/>
      </div>
    </div>
  );
};

export default CVData;
