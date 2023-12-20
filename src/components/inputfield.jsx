const InputField = ({ label, type, name, inputHandler, value }) => (
  <div>
    <h4>{label}</h4>
    <input
      type={type}
      name={name}
      onChange={(e) => {
        inputHandler(e);
      }}
      value={value[name] || ""}
      className="inputPersonalInfo"
    />
  </div>
);

export default InputField;
