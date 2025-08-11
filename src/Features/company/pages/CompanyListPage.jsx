import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies, approveCompany } from '../slice';
import CompanyTable from '../ui/organisms/CompanyTable';

export default function CompanyListPage() {
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const handleApprove = (company) => {
    if (window.confirm(`Approve company ${company.companyName}?`)) {
      dispatch(approveCompany({ companyId: company._id, data: { status: 'approved' } }));
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Companies</h1>
      </div>
      <CompanyTable companies={companies} onApprove={handleApprove} />
    </div>
  );
}
