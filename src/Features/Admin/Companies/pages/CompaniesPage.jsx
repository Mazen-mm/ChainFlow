import React from 'react'
import DetailsCard from '../../../../Shared/Components/Molecules/DetailsCard'
import { AddDocumentIcon, BillingIcon, InvIcon, UserProfileIcon } from '../../../../assets/Icons/SVG'
import CompaniesTable from './../components/organisms/CompaniesTable';
import useCompanies from '../hooks/useCompanies';
import CompaniesActivity from '../components/organisms/CompaniesActivity';

export default function CompaniesPage() {

  const companiesState = useCompanies();

  
  return <>
    <div className="row">
      <DetailsCard name="Active Companies" count="253" icon={<InvIcon fill="none" stroke='#5C8DFF'/>} />
      <DetailsCard name="Total Managers" count="123" icon={<UserProfileIcon fill="none" stroke='#5C8DFF'/>} />
      <DetailsCard name="Pending Registrations" count="4" icon={<AddDocumentIcon />} />
      <DetailsCard name="Payment due" count="7" icon={<BillingIcon stroke='#5C8DFF' /> } />
    </div>
    <div className='my-3'>
      <CompaniesTable {...companiesState}/>
    </div>
    <CompaniesActivity/>
  </>
}
