
export default function FormButton({nameBtn , onClick}) {
  // This component renders a button for form submission
  return <>
    <button type="submit" onClick={onClick} className="btn btn-primary w-100">{nameBtn}</button>
  </>
}
