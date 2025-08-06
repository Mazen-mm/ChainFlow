import EditableField from '../molecules/EditableField';

export default function UserFormFields({ data, tempData, editMode, onChange, onEditToggle }) {
  return (
    <div className="col-lg-9 col-md-6 d-flex flex-column gap-4">
      <div className="row">
        <EditableField col='col-lg-6 col-sm-12' label="First Name" field="firstName" 
          {...getProps()} />
        <EditableField col='col-lg-6 col-sm-12' label="Last Name" field="lastName" 
          {...getProps()} />
      </div>
      <div className="row">
        <EditableField col='col-lg-6 col-sm-12' label="Date of Birth" field="dateOfBirth" 
          {...getProps()} />
        <EditableField col='col-lg-6 col-sm-12' label="Country" field="country" 
          {...getProps()} />
      </div>
      <div className="row">
        <EditableField col='col-lg-6 col-sm-12' label="Email" field="email" type="email" 
          {...getProps()} />
        <EditableField col='col-lg-6 col-sm-12' label="Phone Number" field="phoneNumber" 
          {...getProps()} />
      </div>
    </div>
  );

  function getProps() {
    return { data, tempData, editMode, onChange, onEditToggle };
  }
}
