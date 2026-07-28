import { useState } from "react";

const PasswordField = ({
    name,
  value,
  onChange,
}) => {

  const [show, setShow] = useState(false);

  return (
    <div className="mb-4">

      <label className="block mb-2 font-medium">
        Password
      </label>

      <div className="flex">

        <input
        name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full border rounded-l-lg px-4 py-3"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="bg-gray-200 px-4 rounded-r-lg"
        >
          {show ? "Hide" : "Show"}
        </button>

      </div>

    </div>
  );
};

export default PasswordField;