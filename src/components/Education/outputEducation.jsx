export default function OutputEducation(props) {
  return (
    <ul>
        <h2>Education</h2>
      {props.educationList.map((list) => {
        return (
          <li key={list.id}>
            <section>
              <div>
                <h3>{list.title + " " + list.location}</h3>
                <div>
                  <h3>{list.degree}</h3>
                  <h3>{list.sdate + " " + list.edate}</h3>
                </div>
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
}
