import InputEducation from "./inputEducation";
import { v4 as uuidv4 } from "uuid";

export default function Education(props) {
  const inputHandler = (e) => {
    // console.log(e.target)
    console.log(props.education);
    props.setEducation((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newEducation = {
      id: uuidv4(),
      title: props.education.title,
      degree: props.education.degree,
      sdate: props.education.sdate,
      edate: props.education.edate,
      location: props.education.location,
    };
    props.setEducationList((previous) => {
      return [...previous, newEducation];
    });
    props.setEducation("");
  };

  const deleteEducation = (id) => {
    props.setEducationList((list) => {
      return list.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitForm(e);
        }}
        className="personalInfoSection"
      >
        <h2 className="personalDetailHeading">Education</h2>
        <hr />
        <div className="fullName">
          <InputEducation
            title="Institute"
            type="text"
            name="title"
            inputHandler={inputHandler}
            value={props.education}
          />
          <InputEducation
            title="Degree"
            type="text"
            name="degree"
            inputHandler={inputHandler}
            value={props.education}
          />
        </div>
        <div className="fullName">
          <InputEducation
            title="Start Date"
            type="date"
            name="sdate"
            inputHandler={inputHandler}
            value={props.education}
          />
       
          <InputEducation
            title="End Date"
            type="date"
            name="edate"
            inputHandler={inputHandler}
            value={props.education}
          />
        </div>
        <div className="fullName">
          <InputEducation
            title="Location"
            type="text"
            name="location"
            inputHandler={inputHandler}
            value={props.education}
          />
        </div>
        <button type="submit" className="buttons" >Add</button>
      </form>

      <div>
        <ul>
          {props.educationList.map((list) => {
            return (
              <li key={list.id}>
                <p>{list.title}</p>
                <p>{list.degree}</p>
                <p>{list.location}</p>
                <button
                  onClick={() => {
                    deleteEducation(list.id);
                  }}
                  className="buttons"
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
