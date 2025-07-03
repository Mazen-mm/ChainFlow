import DemoInputs from "../Atoms/DemoInputs";

export default function DemoCard() {
  return  <>
  <div className="card PrimaryText">
  <h5 className='mb-3 fw-bold'>Schedule a Demo</h5>
    <form action='' id='demoForm' className="fw-semibold">

      <DemoInputs labelFor="fullName" labelName="Full Name" inputType="text" inputId="fullName" 
        inputHolder="John Smith"/>
      <DemoInputs labelFor="companyEmail" labelName="Company Email" inputType="email" inputId="companyEmail" 
        inputHolder="john@company.com"/>
      <DemoInputs labelFor="companyName" labelName="Company Name" inputType="text" inputId="companyName" 
        inputHolder="Company Inc."/>
      <DemoInputs labelFor="phoneNumber" labelName="Phone Number" inputType="tel" inputId="phoneNumber" 
        inputHolder="+1 (555) 123-4567"/>

      <h6 className='text-primary smallSize opacity-75 mb-3'>
        By submitting this form, you agree to our privacy policy and terms of service.
      </h6>
      <button className="btn border-0 text-primary w-100" style={{ background:'linear-gradient(75deg, #D6DAFF 0%, #F2F3FF 100%)', boxShadow: '0px 0px 10px 0px rgba(116, 151, 231, 0.25) inset, 4px 4px 10px 0px #9DA7E1, -4px -4px 10px 0px #C9D2FF'}}>
        Request Demo
      </button>

    </form>
  </div>
  </>
}
