import FormInputs from "../Atoms/FormInputs";
import FormButton from "../Atoms/FormButton";
import FormPgh from "../Atoms/FormPgh";

export default function SignupTemp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [size, setSize] = useState("");
  const [industry, setIndustry] = useState("");
  const [locationName, setLocationName] = useState("");
  return (
    <>
      <form>
        <FormInputs
          type="text"
          placeholder="Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormInputs
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <FormInputs
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInputs
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInputs
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <FormButton nameBtn="Sign Up" />
        <FormPgh
          pgh="Already have an account?"
          formNav="Log In"
          to="/auth/login"
        />
      </form>
    </>
  );
}
