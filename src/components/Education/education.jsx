import InputEducation from "./inputEducation";

export default function Education(props) {
  const inputHandler = (e) => {
    props.setEducation((previous) => {
      return [...previous, { [e.target.name]: props.education }];
    });
  };

  const submitForm = (e) => {
    e.preventDefault()
    setEducationList((previous) => {
      return [...previous, { name: props.education }];
    });
  };

  return (
    <form
      onSubmit={(e) => {
        submitForm(e);
      }}
    >
      <div>
        <h2>Education</h2>
        <InputEducation
          title="Institue"
          type="text"
          name="title"
          inputHandler={inputHandler}
          value={props.education}
        />
      </div>
      <div>
        <InputEducation
          title="Degree"
          type="text"
          name="degree"
          inputHandler={inputHandler}
          value={props.education}
        />
      </div>
      <div>
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
      <div>
        <InputEducation
          title="Location"
          type="text"
          name="location"
          inputHandler={inputHandler}
          value={props.education}
        />
      </div>
      <button>Add</button>
    </form>
  );
}
