import React, { useState } from "react";
import Input from "./Input";
import Cvoutput from "./cvoutput";
import Experience from "./experience/experiencedata";
import ExperienceOutput from "./experience/experienceoutput";
import "../style/experience.css";
import JobInput from "./experience/jobdescription";
import JobOutput from "./experience/JobOutput";
import Education from "./Education/education";
import OutputEducation from "./Education/outputEducation";
import Skills from "./skills/skills";
import SkillsOutput from "./skills/skillsoutput";

const CVData = () => {
  const [dataValues, setDataValues] = useState({});
  const [postText, setPostText] = useState("");
  const [experience, setExperience] = useState("");
  const [aboutJob, setAboutJob] = useState("");
  const [item, setItem] = useState([]);
  const [education, setEducation] = useState("");
  const [educationList, setEducationList] = useState([]);
  const [skills, setSkills] = useState("");
  const [addSkills, setAddSkills] = useState([]);

  return (
    <div className="mainContainer">
      <div className="userInput">
        <Input
          dataValues={dataValues}
          setDataValues={setDataValues}
          postText={postText}
          setPostText={setPostText}
        />
        <Experience experience={experience} setExperience={setExperience} />
        <JobInput
          aboutJob={aboutJob}
          setAboutJob={setAboutJob}
          item={item}
          setItem={setItem}
        />
        <Education
          education={education}
          setEducation={setEducation}
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <Skills
          skills={skills}
          setSkills={setSkills}
          addSkills={addSkills}
          setAddSkills={setAddSkills}
        />
      </div>

      <div className="userOutput">
        <Cvoutput
          dataValues={dataValues}
          setDataValues={setDataValues}
          postText={postText}
          setPostText={setPostText}
        />
        <ExperienceOutput
          experience={experience}
          setExperience={setExperience}
        />
        <JobOutput
          aboutJob={aboutJob}
          setAboutJob={setAboutJob}
          item={item}
          setItem={setItem}
        />
        <OutputEducation
          education={education}
          setEducation={setEducation}
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <SkillsOutput
          skills={skills}
          setSkills={setSkills}
          addSkills={addSkills}
          setAddSkills={setAddSkills}
        />
      </div>
    </div>
  );
};

export default CVData;
