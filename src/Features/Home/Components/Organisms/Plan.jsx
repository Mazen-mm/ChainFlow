import MarkedPargh from "../Atoms/MarkedPargh";

export default function Plan() {
  return <>
  <div className="lightBg text-center PrimaryText py-5">
    <h2>Choose Your Plan</h2>
    <p>Flexible pricing options to fit businesses of all sizes.</p>
    <div className="row row-cols-md-3 mx-auto container g-4">
      <div className="col-sm-12 py-4">
        <div className="card h-100 text-start PrimaryText d-flex justify-content-between">
            <h5>Basic</h5>
            <h2>$499<span style={{fontSize:'x-small'}}>/month</span></h2>
            <p>Perfect for small businesses with simple supply chains</p>
            <MarkedPargh Pargh={"Up to 5 partner connections"}/>
            <MarkedPargh Pargh={"Real-time dashboard"}/>
            <MarkedPargh Pargh={"Basic shipment tracking"}/>
            <MarkedPargh Pargh={"Document storage (10GB)"}/>
            <MarkedPargh Pargh={"Email support"}/>
          <button className='btn btn-light border-1 border-dark border-opacity-25 PrimaryText'>
            Start Free Trial
          </button>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="card h-100 text-start primary d-flex justify-content-between"
          style={{boxShadow: '0px 0px 15px 8px  #9DA7E1'}}>
            <h5>Professional</h5>
            <h2>$999/month</h2>
            <p>Ideal for growing businesses with complex supply chains</p>
            <MarkedPargh Pargh={"Up to 25 partner connections"}/>
            <MarkedPargh Pargh={"Advanced analytics"}/>
            <MarkedPargh Pargh={"GPS shipment tracking"}/>
            <MarkedPargh Pargh={"Document storage (50GB)"}/>
            <MarkedPargh Pargh={"Inventory management"}/>
            <MarkedPargh Pargh={"Priority support"}/>
          <button className='btn blueAccent'>Contact Sales</button>
        </div>
      </div>
      <div className="col-sm-12 py-4">
        <div className="card h-100 text-start PrimaryText d-flex justify-content-between">
            <h5>Enterprise</h5>
            <h2>Custom</h2>
            <p>For large organizations with global supply chains</p>
            <MarkedPargh Pargh={"Unlimited partner connections"} />
            <MarkedPargh Pargh={"Custom integrations"} />
            <MarkedPargh Pargh={"Advanced analytics & reporting"} />
            <MarkedPargh Pargh={"Unlimited document storage"} />
            <MarkedPargh Pargh={"API access"} />
            <MarkedPargh Pargh={"Dedicated account manager"} />
          <button className='btn btn-light border-1 border-dark border-opacity-25 PrimaryText'>
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
}
