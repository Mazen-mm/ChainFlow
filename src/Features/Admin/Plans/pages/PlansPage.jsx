import React from 'react'
import DetailsThreeCards from '../../UserManagement/components/molecules/DetailsThreeCards'
import { BillingIcon, InvIcon, PenIcon, PlusIcon, RecycleIcon, UserIcon } from '../../../../assets/Icons/SVG'
import DashBtn from './../../../../Shared/Components/Atoms/DashBtn';
import MarkedPargh from '../../../Home/Components/Atoms/MarkedPargh';
import CheckboxWithLabel from '../../../Settings/notificationSettings/components/atoms/CheckboxWithLabel';

export default function PlansPage() {
  return <>
    <div className="row">
      <DetailsThreeCards name='Plans' count='3' icon={<UserIcon fill='#5C8DFF' />} />
      <DetailsThreeCards name='Popular plan' count='Basic' icon={<InvIcon fill='none' stroke='#5C8DFF' />} />
      <DetailsThreeCards name='Monthly Revenue' count='$24,342' icon={<BillingIcon stroke='#5C8DFF' />} />
    </div>
    <div className="row rounded-4 my-3" style={{ border: '2px dashed #07105136' }}>
      <div className="d-flex align-items-center justify-content-between py-2" style={{borderBottom: '2px dashed #07105136'}}>
        <h5 className='PrimaryText' >Subscription Plans</h5>
        <DashBtn BtnName='Add New Plan' BtnColor='btn-primary' BtnIcon={<PlusIcon />} />
      </div>
      <div className="row row-cols-md-3 py-3">
      <div className="col-sm-12" >
        <div className="card h-100 text-start PrimaryText d-flex justify-content-between rounded-4 gap-3" style={{ border: '2px dashed #0F345C'}}>
          <h5>Basic</h5>
          <h2>$499<span style={{fontSize:'x-small'}}>/month</span></h2>
          <p>Perfect for small businesses with simple supply chains</p>
          <MarkedPargh Pargh={"Up to 5 partner connections"}/>
          <MarkedPargh Pargh={"Real-time dashboard"}/>
          <MarkedPargh Pargh={"Basic shipment tracking"}/>
          <MarkedPargh Pargh={"Document storage (10GB)"}/>
          <MarkedPargh Pargh={"Email support"}/>
          <CheckboxWithLabel label="Recommended Plan" />
          <div className="d-flex justify-content-between gap-3 ">
            <DashBtn BtnName="Remove" BtnColor="w-100" BtnStyle={{ backgroundColor: '#F6D2D2', color: '#A00303' }} BtnIcon={<RecycleIcon stroke='#A00303' />}  />
            <DashBtn BtnName="Edit" BtnColor="w-100"  BtnIcon={<PenIcon />} />
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="card h-100 text-start PrimaryText d-flex justify-content-between rounded-4" style={{ border: '2px dashed #0F345C'}}>
          <h5>Enterprise</h5>
          <h2>Custom</h2>
          <p>For large organizations with global supply chains</p>
          <MarkedPargh Pargh={"Unlimited partner connections"} />
          <MarkedPargh Pargh={"Custom integrations"} />
          <MarkedPargh Pargh={"Advanced analytics & reporting"} />
          <MarkedPargh Pargh={"Unlimited document storage"} />
          <MarkedPargh Pargh={"API access"} />
          <MarkedPargh Pargh={"Dedicated account manager"} />
          <CheckboxWithLabel label="Recommended Plan" />
          <div className="d-flex justify-content-between gap-3 ">
            <DashBtn BtnName="Remove" BtnColor="w-100" BtnStyle={{ backgroundColor: '#F6D2D2', color: '#A00303' }} BtnIcon={<RecycleIcon stroke='#A00303' />}  />
            <DashBtn BtnName="Edit" BtnColor="w-100"  BtnIcon={<PenIcon />} />
          </div>
        </div>
      </div>      
      <div className="col-sm-12">
        <div className="card h-100 text-start PrimaryText d-flex justify-content-between rounded-4"
          style={{boxShadow: '0px 0px 15px 8px  #9DA7E1' , border: '2px dashed #0F345C'}}>
          <h5>Professional</h5>
          <h2>$999/month</h2>
          <p>Ideal for growing businesses with complex supply chains</p>
          <MarkedPargh Pargh={"Up to 25 partner connections"}/>
          <MarkedPargh Pargh={"Advanced analytics"}/>
          <MarkedPargh Pargh={"GPS shipment tracking"}/>
          <MarkedPargh Pargh={"Document storage (50GB)"}/>
          <MarkedPargh Pargh={"Inventory management"}/>
          <MarkedPargh Pargh={"Priority support"}/>
          <CheckboxWithLabel label="Recommended Plan" />
          <div className="d-flex justify-content-between gap-3 ">
            <DashBtn BtnName="Remove" BtnColor="w-100" BtnStyle={{ backgroundColor: '#F6D2D2', color: '#A00303' }} BtnIcon={<RecycleIcon stroke='#A00303' />}  />
            <DashBtn BtnName="Edit" BtnColor="w-100"  BtnIcon={<PenIcon />} />
          </div>
        </div>
      </div>
    </div>
    </div>

  </>
}
