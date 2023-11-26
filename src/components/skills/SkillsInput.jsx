export default function SkillInput({ type, name, value, inputHandler}) {
  return (
    <>
      <input

        type={type}
        name={name}
        value={value || ''}
        onChange={(e) => inputHandler(e)}
        className="inputPersonalInfo"
      />
    </>
  );
}
