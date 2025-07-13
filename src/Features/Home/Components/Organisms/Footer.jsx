import { ChainLogo, FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "../../../../assets/Icons/SVG";

export default function Footer() {
  return  <>
  <div className="DarkBg text-white py-4">
    <div className="container row justify-content-between align-items-center mx-auto pb-4 border-bottom border-black">
      <div className="col-md-4 col-sm-12">
        <ChainLogo fill="#5C8DFF" clsName='w-50'/>
        <p className="fs-6">Transforming supply chains with end-to-end visibility and seamless collaboration.</p>
        <div className="d-flex justify-content-start gap-3">
          <span className="bg-black rounded-circle p-3"><TwitterIcon/></span>
          <span className="bg-black rounded-circle p-3"><LinkedInIcon/></span>
          <span className="bg-black rounded-circle p-3"><FacebookIcon/></span>
          <span className="bg-black rounded-circle p-3"><InstagramIcon/></span>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 d-flex justify-content-evenly text-secondary">
        <div className="d-flex flex-column">
          <p className="text-white">Product</p>
          <span>Features</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Updates</span>
          <span>Roadmap</span>
        </div>
        <div className="d-flex flex-column">
          <p className="text-white">Company</p>
          <span>About Us</span>
          <span>Careers</span>
          <span>Partners</span>
          <span>Blog</span>
          <span>Press</span>
        </div>
        <div className="d-flex flex-column">
          <p className="text-white">Product</p>
          <span>Documentation</span>
          <span>Help Center</span>
          <span>API</span>
          <span>Community</span>
          <span>Contact</span>
        </div>
      </div>
    </div>
    <div className="row mt-2 text-center opacity-75">
      <div className="col-sm-8 mx-auto d-flex justify-content-between ">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Policy</p>
      </div>
      <p>© 2023 ChainFlow. All rights reserved.</p>
    </div>
  </div>
  </>
}
