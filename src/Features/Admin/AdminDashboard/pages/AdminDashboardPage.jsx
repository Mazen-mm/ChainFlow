
import DetailsCard from '../../../../Shared/Components/Molecules/DetailsCard'
import { AddDocumentIcon, BillingIcon, InvIcon, UserIcon } from '../../../../assets/Icons/SVG'

import UserRegistration from '../components/organisms/UserRegistiration';
import SubscriptionPlan from '../components/organisms/SubscriptionPlan';
import PendingRegistration from '../components/organisms/PendingRegistration';
import Divider from '../components/molecules/Divider';
import RecentActivities from '../components/organisms/RecentActivities';

export default function AdminDashboardPage() {

  return  <>
  {/* Summary Cards */}
  <div className="row">
    <DetailsCard name="Total Users" count="1,415" icon={<UserIcon fill="#5C8DFF" />} />
    <DetailsCard name="Active Companies" count="253" icon={<InvIcon fill="none" stroke='#5C8DFF'/>} />
    <DetailsCard name="Pending Registrations" count="4" icon={<AddDocumentIcon />} />
    <DetailsCard name="Monthly Revenue" count="$24,342" icon={<BillingIcon  stroke='#5C8DFF'/>} />
  </div>
  <div className="row my-2">
    <div className="col-lg-7 col-md-6 col-sm-12 p-1">
      <SubscriptionPlan/>
    </div>
    <div className="col-lg-5 col-md-6 col-sm-12 p-1">
      <UserRegistration/>
    </div>
  </div>
  <Divider text="Pending Registrations" />
  <div className="row">
    <PendingRegistration/>
  </div>
  <Divider text="Recent Activities" />
  <div className="row">
    <RecentActivities/>
  </div>
</>
}
