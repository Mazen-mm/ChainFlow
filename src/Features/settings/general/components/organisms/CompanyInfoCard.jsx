export default function CompanyInfoCard() {
  return (
    <div className="card rounded-3 whiteBg">
      <h5>Company Information</h5>
      <div className="row my-2">
        {[
          { label: "Company Name", placeholder: "Arasaka Corp", col: 6 },
          { label: "Business Type", placeholder: "Manufacturing", col: 6 },
          { label: "Company Address", placeholder: "123 Corporations plaza City centre, Night City, 90210", col: 12 },
          { label: "Tax ID / VAT Number", placeholder: "US123456789", col: 6 },
          { label: "Industry", placeholder: "Electronics", col: 6 }
        ].map(({ label, placeholder, col }) => (
          <div key={label} className={`col-md-${col} my-1`}>
            <label className="fw-semibold">{label}</label>
            <input type="text" className="form-control" placeholder={placeholder} />
          </div>
        ))}
      </div>
    </div>
  );
}
