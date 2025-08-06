
import { PenIcon } from '../../../../../assets/Icons/SVG';
import DashBtn from '../../../../../Shared/Components/Atoms/DashBtn';
import ProfilePic from '../../../../../assets/Images/poker.jpg';
import EditableField from '../molecules/EditableField';

export default function ProfilePictureCard({ username, tempData, editMode, onChange, onEditToggle }) {
  const handleProfilePictureEdit = () => {
    alert('Profile picture edit functionality would be implemented here');
  };

  return (
    <div className="col-lg-3 col-md-6 text-center">
      <img src={ProfilePic} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }}
        alt="Profile" />
      <DashBtn BtnName='Edit Profile Picture' BtnColor='w-100 my-3 bg-white' 
        BtnIcon={<PenIcon />} onClick={handleProfilePictureEdit} />
      <div className="text-start">
        <EditableField
          col='col-12'
          label="Username"
          field="username"
          value={username}
          tempValue={tempData.username}
          isEditing={editMode.username}
          onChange={onChange}
          onEditToggle={onEditToggle}
        />
      </div>
    </div>
  );
}
