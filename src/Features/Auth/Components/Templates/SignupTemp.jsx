import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormInputs from "../Atoms/FormInputs";
import FormButton from "../Atoms/FormButton";
import FormPgh from "../Atoms/FormPgh";
import { BASE_URL } from "../../../../server/server";
import { useAuth } from "../../../../ProtectedRoute/ProtectedRoute";

export default function SignupTemp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    industry: '',
    size: '',
    location: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const API_URL = `${BASE_URL}/api/auth/register`;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post(API_URL, data);
      setIsAuthenticated(true); 
      setLoading(false);
      navigate('/auth/login'); 
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Registration failed. Please try again.';
      setError(errMsg);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInputs
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
       
        <FormInputs
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="industry"
          placeholder="Industry"
          value={formData.industry}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="size"
          placeholder="Company Size"
          value={formData.size}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        {/* <FormInputs
          type="file"
          name="documents"
          onChange={handleChange}
        /> */}
        <FormButton nameBtn={loading ? "Signing Up..." : "Sign Up"} disabled={loading} />
        <FormPgh
          pgh="Already have an account?"
          formNav=" Log In"
          to="/auth/login"
        />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}