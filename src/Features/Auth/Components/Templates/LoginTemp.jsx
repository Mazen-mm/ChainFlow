import FormButton from "../Atoms/FormButton";
import FormCheck from "../Atoms/FormCheck";
import FormInputs from "../Atoms/FormInputs";
import FormPgh from "../Atoms/FormPgh";

export default function LoginTemp() {
  return <>
    <form>
      <FormInputs type="text" placeholder="User Name" />
      <FormInputs type="password" placeholder="Password" />
      <FormCheck/>
      <FormButton nameBtn='Log In' />
      <FormPgh pgh="Don't have an account?" formNav=' Sign Up' />
    </form>
  </>
}


