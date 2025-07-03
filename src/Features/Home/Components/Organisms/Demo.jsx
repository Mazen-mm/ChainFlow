import MarkedPargh from "../Atoms/MarkedPargh";
import DemoCard from "../Molecules/DemoCard";

export default function Demo() {
  return  <>
  <div className="primary py-5">

    <div className="row mx-auto w-75 align-items-center justify-content-between">

      <div className="col-sm-6">
        <h2>Ready to Transform Your Supply Chain?</h2>
        <p className='my-4 fs-5'>
          Schedule a personalized demo to see how ChainFlow can streamline your operations and boost efficiency.
        </p>
        <MarkedPargh Pargh={"Connect your entire supply chain network"}/>
        <MarkedPargh Pargh={"Gain real-time visibility into operations"}/>
        <MarkedPargh Pargh={"Reduce costs and improve efficiency"}/>
        <MarkedPargh Pargh={"Enhance collaboration with partners"}/>
      </div>

      <div className="col-sm-5">
        <DemoCard />
      </div>
    </div>

  </div>
  </>
}
