import WorkCard from "../Molecules/WorkCard";

export default function Works() {
  return <>
  <div className="lightBg text-center PrimaryText py-5">
    <h2>How It Works</h2>
    <p>ChainFlow connects all stakeholders in your supply chain for seamless collaboration.</p>
    <div className="row row-cols-md-4 mx-auto container g-4">
      <WorkCard Num={1} h6={"Connect"} Pargh={"Link all your supply chain partners"} />
      <WorkCard Num={2} h6={"Collaborate"} Pargh={"Share data and documents securely"} />
      <WorkCard Num={3} h6={"Track"} Pargh={"Monitor orders and shipments in real-time"} />
      <WorkCard Num={4} h6={"Analyze"} Pargh={"Gain insights and optimize operations"} />
    </div>
  </div>
  </>
}
