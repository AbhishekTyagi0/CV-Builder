import SkillInput from "./SkillsInput";
import { v4 as uuidv4 } from "uuid";

export default function Skills(props) {
  const submitSkills = (e) => {
    e.preventDefault();
    props.setAddSkills((skills) => {
      return [...skills, { id: uuidv4(), title: props.skills }];
    });
    props.setSkills(""); // Clear the input field after submission
  };

  const deleteSkills = (id) => {
    props.setAddSkills((skill) => {
      return skill.filter(skill => skill.id !== id);
    });
  };

  return (
    <>
      <form onSubmit={submitSkills} className="form-submit">
        <h3>Skills</h3>
        <hr />
        <section className="skills-section">
        <SkillInput
          type="text"
          name="skill"
          value={props.skills}
          inputHandler={(e) => {
            props.setSkills(e.target.value);
          }}

        />
        <button type="submit" className="buttons">Add Skills</button>
        </section>
      </form>
      
      <div>
        <ul>
          {props.addSkills.map((skill) => {
            return (
              <li key={skill.id}>
                <p>{skill.title}</p>
                <button onClick={(e) => deleteSkills(skill.id)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
