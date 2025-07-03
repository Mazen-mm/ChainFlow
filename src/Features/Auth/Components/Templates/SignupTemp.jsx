import FormInputs from '../Atoms/FormInputs'
import FormButton from '../Atoms/FormButton'
import FormPgh from '../Atoms/FormPgh'

export default function SignupTemp() {
  return  <>
    <form>
      <FormInputs type="text" placeholder="User Name" />
      <FormInputs type="email" placeholder="Email" />
      <FormInputs type="password" placeholder="Password" />
      <FormInputs type="password" placeholder="Confirm Password" />
      <FormButton nameBtn='Sign Up' />
      <FormPgh pgh="Already have an account?" formNav='Log In' />
    </form>
  </>
}
