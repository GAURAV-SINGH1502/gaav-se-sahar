import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "buyer",
    village: "",
    district: "",
    state: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      alert("Registration Successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Full Name"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <InputField
        label="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <PasswordField
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <button className="w-full bg-green-700 text-white py-3 rounded-lg mt-4">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;