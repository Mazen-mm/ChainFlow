import { FullStars, Stars } from "../../../../assets/Icons/SVG";
import OurCustomersCard from "../Molecules/OurCustomersCard";

export default function OurCustomers() {
  return  <>
  <div className='whiteBg text-center PrimaryText py-5'>
    <h2>What Our Customers Say</h2>
    <p>Hear from businesses that have transformed their supply chain with ChainFlow.</p>
    <div className="row row-cols-md-3 container mx-auto g-4 PrimaryText">
      <OurCustomersCard 
        Name={"Sarah Johnson"} 
        Title={"Supply Chain Director"} 
        Company={"Global Manufacturing Inc."}
        desc={`"ChainFlow has reduced our order processing time by 65% and virtually eliminated shipping errors."`}
        Rate={<Stars/>}
      />
      <OurCustomersCard 
        Name={"Michael Chen"} 
        Title={"Logistics Manager"}
        Company={"Pacific Distributors"}
        desc={`"The real-time visibility across our entire supply network has been a game-changer for our operations."`}
        Rate={<Stars/>}
      />
      <OurCustomersCard 
        Name={"Elena Rodriguez"} 
        Title={"Operations VP"}
        Company={"Retail Solutions Group"}
        desc={`"We've improved inventory accuracy by 40% and reduced stockouts by 75% since implementing ChainFlow."`}
        Rate={<FullStars/>}
      />
    </div>
  </div>
  </>
}
