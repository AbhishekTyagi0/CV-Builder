import React from "react";

function InputExperience({ title, type, name, inputHandler, value }) {

    return (
  <div>
    <h3>{title}</h3>
    <input
      type={type}
      name={name}
      onChange={(e) => {
        inputHandler(e);
      }}
      value={value[name]}
      className="inputPersonalInfo"
    />
  </div>
    )
}

function Experience(props) {
  const inputHandler = (e) => {
    props.setExperience((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="personalInfoSection">
      <h2>Professional Experience</h2>
      <section className="fullName">
        <InputExperience
          title="Job Title"
          type="text"
          name="work"
          inputHandler={inputHandler}
          value={props.experience}
        />
        <InputExperience
          title="Employer"
          type="text"
          name="company"
          inputHandler={inputHandler}
          value={props.experience}
        />
      </section>
      <section className="fullName">

        <InputExperience
          title="Start Date"
          type="date"
          name="sdate"
          inputHandler={inputHandler}
          value={props.experience} />
        <InputExperience
          title="End Date"
          type="date"
          name="edate"
          inputHandler={inputHandler}
          value={props.experience}
        />
         </section>
      <section className="fullName">
        <InputExperience
          title="Location"
          type="city"
          name="location"
          inputHandler={inputHandler}
          value={props.experience}
        />
      </section>
    </div>
  );
}

export default Experience;
