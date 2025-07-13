import { useState } from "react";
import axios from "axios";
import FormButton from "../Atoms/FormButton"; 
import FormInputs from "../Atoms/FormInputs"; 
import FormCheck from "../Atoms/FormCheck";
import FormPgh from "../Atoms/FormPgh";
import { BASE_URL } from "../../../../server/server";
import { useAuth } from "../../../../ProtectedRoute/ProtectedRoute";

export default function LoginTemp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();
  const API_URL = `${BASE_URL}/api/auth/login`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        API_URL,
        { email, password },
        {
          withCredentials: true, 
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      console.log("Headers:", response.headers);
      console.log("Status:", response.status);
      setUserData(response.data);
      console.log("Login successful:", response.data);
      setIsAuthenticated(true); 
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
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
        />
        <FormInputs
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormCheck />
        <FormButton nameBtn={loading ? "Logging In..." : "Log In"} />
        <FormPgh pgh="Don't have an account?" formNav=" Sign Up" to="/auth/signup" />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
