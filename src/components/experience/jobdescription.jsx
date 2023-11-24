
function JobInput(props) {


  const addJob = (e) => {
    e.preventDefault();
    props.setItem((previous) => {
      return [...previous, { id: crypto.randomUUID(), title: props.aboutJob }];
    });
    props.setAboutJob("");
  };

  const deleteBtn = (id) => {
    props.setItem((item) => {
      return item.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <form onSubmit={addJob}>
        <div>
          <textarea
            id="jobdescription"
            cols="30"
            rows="5"
            onChange={(e) => props.setAboutJob(e.target.value)}
            value={props.aboutJob}
          ></textarea>
        </div>
        <button type="submit">Add</button>
      </form>

      <div>
        <ul>
          {props.item.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <button
                  onClick={() => {
                    deleteBtn(item.id);
                  }}
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


export default JobInput;
