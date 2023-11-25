import React from 'react'

function SkillsOutput(props) {
  return (
    <div>
      <h3>Areas of Expertise</h3>
      <ul>
        {props.addSkills.map(skill=>{
            return(
        <li key={skill.id}>
            <p>{skill.title}</p>
        </li>

            )
        })}
      </ul>
    </div>
  )
}

export default SkillsOutput;
