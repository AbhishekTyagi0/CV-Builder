import React from "react";

function ExperienceOutput(props) {
  return (
    <div className="experienceContainer">
      <div className="experienceHeading">
        <h2>{props.experience.company + ", " + props.experience.location}</h2>
        <h3>{props.experience.work}</h3>
      </div>
      <div className="experienceTime">
        <p>{props.experience.sdate + " to " + props.experience.edate}</p>
      </div>
    </div>
  );
}

export default ExperienceOutput;
