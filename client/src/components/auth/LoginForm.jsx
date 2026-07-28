import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

const LoginForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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
      const data = await loginUser(form);

      localStorage.setItem("token", data.token);

      if (data.user.role === "buyer") {
        navigate("/buyer-dashboard");
      } else {
        navigate("/seller-dashboard");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <InputField
        label="Email"
        type="email"
        value={form.email}
        placeholder="Enter Email"
        onChange={handleChange}
        name="email"
      />

      <PasswordField
        value={form.password}
        onChange={handleChange}
        name="password"
      />

      <button
        className="w-full bg-green-700 text-white py-3 rounded-lg mt-4"
      >
        Login
      </button>

    </form>
  );
};

export default LoginForm;