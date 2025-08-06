
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import FormInputs from "../Atoms/FormInputs";
import FormButton from "../Atoms/FormButton";
import FormPgh from "../Atoms/FormPgh";
import { useAuthRedux } from '../../../../Shared/hooks/useAuthRedux';
import { register } from '../../../../Shared/redux/slices/authSlice';


export default function SignupTemp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    industry: '',
    size: '',
    locationName: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    latitude: '',
    longitude: '',
  });
  const navigate = useNavigate();
  const { loading, error, dispatch } = useAuthRedux();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    dispatch(register(data)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        navigate('/auth/login');
      }
    });
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
          name="locationName"
          placeholder="Location Name"
          value={formData.locationName}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="zipCode"
          placeholder="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="latitude"
          placeholder="Latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
        <FormInputs
          type="text"
          name="longitude"
          placeholder="Longitude"
          value={formData.longitude}
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

      {error && <p style={{ color: "red" }}>{typeof error === 'string' ? error : error?.message}</p>}
    </>
  );
}