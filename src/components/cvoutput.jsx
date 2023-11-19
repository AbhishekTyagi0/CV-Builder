import React from "react";

const Cvoutput = (props) => {
  console.log("Output props", props);
  return <div>{props.dataValues.title}</div>;
};

export default Cvoutput;
