import React, { useState } from "react";
import Input from "./Input";
import Cvoutput from "./cvoutput";

const CVData = () => {
  const [dataValues, setDataValues] = useState({});
  // const [data, setData] = useState(0);

  const data = 0;
  const changeFunc = (value) => {
    data = value;
  };

  return (
    <div>
      <div className="userInput">
        <Input dataValues={dataValues} setDataValues={setDataValues} change = {changeFunc}/>
      </div>
      <div className="userOutput">
        <Cvoutput dataValues={dataValues} setDataValues={setDataValues} />
      </div>
    </div>
  );
};

export default CVData;
