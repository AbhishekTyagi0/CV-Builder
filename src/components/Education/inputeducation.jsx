const InputEducation = ({ title, type, name, value, inputHandler }) => {
  return (
    <div>
      <h2>{title}</h2>
      <input
        type={type}
        name={name}
        value={value[name]}
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
      />
    </div>
  );
};

export default InputEducation;
