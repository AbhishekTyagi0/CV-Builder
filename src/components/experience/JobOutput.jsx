export default function JobOutput(props) {
  return (
    <div>
      <ul className="job-desc-output">
        {props.item.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
}