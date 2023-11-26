const InputEducation = ({ title, type, name, value, inputHandler }) => {
  return (
    <div>
      <h4>{title}</h4>
      <input
        type={type}
        name={name}
        value={value[name] || ''}
        onChange={(e) => {  
          inputHandler(e);
        }}
        className="inputPersonalInfo"
      />
    </div>
  );
};

export default InputEducation;
