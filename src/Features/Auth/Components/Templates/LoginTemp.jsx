
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../Atoms/FormButton";
import FormInputs from "../Atoms/FormInputs";
import FormCheck from "../Atoms/FormCheck";
import FormPgh from "../Atoms/FormPgh";
import { useAuthRedux } from '../../../../Shared/hooks/useAuthRedux';
import { login } from '../../../../Shared/redux/slices/authSlice';


export default function LoginTemp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loading, error, token, dispatch } = useAuthRedux();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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

      {error && <p style={{ color: "red" }}>{typeof error === 'string' ? error : error?.message}</p>}
    </>
  );
}