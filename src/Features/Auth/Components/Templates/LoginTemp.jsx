import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormButton from "../Atoms/FormButton"; 
import FormInputs from "../Atoms/FormInputs"; 
import FormCheck from "../Atoms/FormCheck";
import FormPgh from "../Atoms/FormPgh";
import { BASE_URL } from "../../../../server/server";
import { useAuth } from "../../../../ProtectedRoute/ProtectedRoute";

export default function LoginTemp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const API_URL = `${BASE_URL}/api/auth/login`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = { email, password };
      const res = await axios.post(API_URL, formData);
      setIsAuthenticated(true); 
      setLoading(false);
      navigate('/home'); 
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Login failed. Please try again.';
      setError(errMsg);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInputs
          type="text"
          placeholder="User Name"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInputs
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormCheck />
        <FormButton nameBtn={loading ? "Logging In..." : "Log In"} disabled={loading} />
        <FormPgh pgh="Don't have an account?" formNav=" Sign Up" to="/auth/signup" />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}