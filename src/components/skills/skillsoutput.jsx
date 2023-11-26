import React from 'react'

function SkillsOutput(props) {
  return (
    <div className='skill-output'>
      <h2>Areas of Expertise</h2>
      <ul className='skill-output-list'>
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
