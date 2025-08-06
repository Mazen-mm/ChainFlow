import { UserProfileIcon } from '../../../../assets/Icons/SVG';
import { useUserProfile } from '../hooks/useUserProfile';
import ProfilePictureCard from '../components/organisms/ProfilePictureCard';
import UserFormFields from '../components/organisms/UserFormFields';

export default function UserProfilePage() {
  const {
    profileData,
    tempData,
    editMode,
    handleEditToggle,
    handleInputChange
  } = useUserProfile();

  return (
    <div className="row PrimaryText gap-3">
      <div className="d-flex align-items-center gap-2 my-1">
        <UserProfileIcon stroke='currentColor' />
        <h5 className="m-0">User Profile</h5>
      </div>
      <small>Personalize your account with a photo.</small>
      <hr />

      <div className="card rounded-3 whiteBg PrimaryText">
        <h5>Company Information</h5>
        <div className="row align-items-center justify-content-between">
          <ProfilePictureCard
            username={profileData.username}
            tempData={tempData}
            editMode={editMode}
            onChange={handleInputChange}
            onEditToggle={handleEditToggle}
          />
          <UserFormFields
            data={profileData}
            tempData={tempData}
            editMode={editMode}
            onChange={handleInputChange}
            onEditToggle={handleEditToggle}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
