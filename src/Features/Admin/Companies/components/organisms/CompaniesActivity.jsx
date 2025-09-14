import React from 'react'
import ActivitiesCard from '../../../AdminDashboard/components/molecules/ActivitiesCard'

export default function CompaniesActivity() {
  return <>
  <h6 className='PrimaryText'>Recent Activity</h6>
  <div className="row">
    <ActivitiesCard />
    <ActivitiesCard />
    <ActivitiesCard />
    <ActivitiesCard />
  </div>
  </>
}
