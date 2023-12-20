export default function OutputEducation(props) {
  return (
    <ul className="education-output-style">
      <h2>Education</h2>
      {props.educationList.map((list) => {
        return (
          <li key={list.id}>
            <section>
              <div className="institute-name">
                <h3>{list.title + ", " + list.location}</h3>
                <div className="education-output-degree">
                  <h3>{list.degree}</h3>
                  <h4>{list.sdate + " to " + list.edate}</h4>
                </div>
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
}
