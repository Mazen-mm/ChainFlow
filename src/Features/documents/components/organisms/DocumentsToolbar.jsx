

import { DownloadIcon, FilterIcon, FolderPlsIcon, PlusIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';

export default function DocumentsToolbar () {


  const UploadDocument = () => {
    console.log('Upload Document clicked');
  };

  const CreateFolder = () => {
    console.log('Create Folder clicked');
  };

  const Download = () => {
    console.log('Download clicked');
  };

  const Filter = () => {
    console.log('Filter clicked');
  };



  return (
    <div className="row align-items-center my-2">
      <div className="col-lg-5 col-12">
        <h4 className="PrimaryText">Documents Management</h4>
      </div>
      <div className="col-lg-7 col-12">
        <div className="d-flex justify-content-between">
          <DashBtn BtnIcon={<PlusIcon />} BtnName="Upload Document" onClick={UploadDocument} BtnColor='btn-primary'/>
          <DashBtn BtnIcon={<FolderPlsIcon/>} BtnName={'Create Folder'} onClick={CreateFolder} />
          <DashBtn BtnIcon={<DownloadIcon/>} BtnName={'Download'} onClick={Download} />
          <DashBtn BtnIcon={<FilterIcon/>} BtnName={'Filter'} onClick={Filter} />
        </div>
      </div>
    </div>
  );
};

