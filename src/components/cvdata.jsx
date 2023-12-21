import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
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

const CVData = forwardRef((props, ref) => {
  const [dataValues, setDataValues] = useState({
    fname: "John",
    lname: "Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    linkedin: "linkedin.com/in/johndoe",
    address: "123 Main St",
    pincode: "12345",
  });
  const [postText, setPostText] = useState({
    textArea:
      "As a software developer, I have a strong history of delivering reliable code on schedule. I enjoy working with diverse teams to build powerful software applications that meet business goals.",
  });
  const [experience, setExperience] = useState({
    work: "Software Developer",
    company: "Tech Solutions Inc.",
    sdate: "2022-01-01",
    edate: "2023-01-01",
    location: "Cityville",
  });
  const [aboutJob, setAboutJob] = useState("");
  const [item, setItem] = useState([
    {
      id: 1,
      title: "Write and maintain clean, efficient, and well-documented code.",
    },
    {
      id: 2,
      title: "Analyze and solve technical problems in software development.",
    },
    {
      id: 3,
      title:
        "Work closely with team members, communicate effectively, and contribute to the overall success of the project.",
    },
    {
      id: 4,
      title:
        "Stay updated on new technologies and industry trends to enhance skills and improve software development practices.",
    },
  ]);
  const [education, setEducation] = useState("");
  const [educationList, setEducationList] = useState([
    {
      id: 1,
      title: "University of California",
      location: "Berkeley, CA",
      degree: "Bachelor of Science in Computer Science",
      sdate: "12-04-2012",
      edate: "15-03-2016",
    },
  ]);
  const [skills, setSkills] = useState("");
  const [addSkills, setAddSkills] = useState([
    { id: 1, title: "JavaScript" },
    { id: 2, title: "React.js" },
    { id: 3, title: "Node.js" },
    { id: 4, title: "HTML5" },
    { id: 5, title: "CSS3" },
    { id: 6, title: "Git" },
    { id: 7, title: "SQL" },
    { id: 8, title: "MongoDB" },
    { id: 9, title: "RESTful APIs" },
    { id: 10, title: "Responsive Design" },
  ]);

  //Download pdf functionality

  const userOutputRef = useRef(null);

  const generatePdf = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(userOutputRef.current, {
        useCORS: true,
        scrollY: -window.scrollY,
        scale: 2,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("user_output.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  // console.log(userOutputRef.current);

  useImperativeHandle(ref, () => ({ generatePdf }));

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

      <div ref={userOutputRef} className="userOutput">
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
});

export default CVData;
