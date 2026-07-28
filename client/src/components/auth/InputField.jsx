const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
/>
    </div>
  );
};

export default InputField;