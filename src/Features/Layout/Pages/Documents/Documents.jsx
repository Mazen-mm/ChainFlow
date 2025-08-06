

import { useState } from 'react';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';
import { DocIcon, DownloadIcon, FilterIcon, FolderIcon, FolderPlsIcon, PlusIcon }
    from '../../../../assets/Icons/SVG';



export default function Documents () {
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [documents] = useState([
    {
      id: 1,
      name: 'Certificates',
      type: 'folder',
      owner: 'Abdullah',
      lastModified: 'May 17, 2025',
      fileSize: '-',
    },
    {
      id: 2,
      name: 'Requirements',
      type: 'folder',
      owner: 'Abdullah',
      lastModified: 'May 17, 2025',
      fileSize: '-',
    },
    {
      id: 3,
      name: 'Chat Backups',
      type: 'folder',
      owner: 'Abdullah',
      lastModified: 'May 17, 2025',
      fileSize: '-',
    },
    {
      id: 4,
      name: 'Employees Timetable',
      type: 'file',
      owner: 'Abdullah',
      lastModified: 'May 17, 2025',
      fileSize: '245kb',
    }
  ]);

  const SelectDocument = (docId) => {
    setSelectedDocuments(prev =>
      prev.includes(docId)
        ? prev.filter(id => id !== docId)
        : [...prev, docId]
    );
  };

  const handleSelectAll = () => {
    setSelectedDocuments(prev =>
      prev.length === documents.length ? [] : documents.map(doc => doc.id)
    );
  };

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

  const MoreActions = (docId) => {
    console.log('More actions for document:', docId);
  };

  const getFileIcon = (type) => {
    if (type === 'folder') {
      return <FolderIcon/>
    } 
    else {
      return <DocIcon fill={'#0F345C'}/>
    }
  };

  return  <>
    {/* Header */}
    <div className="row align-items-center my-2">
      <div className="col-lg-5 col-12">
        <h4 className="PrimaryText">Documents Management</h4>
      </div>
      <div className="col-lg-7 col-12">
        <div className="d-flex justify-content-between">
          <DashBtn BtnIcon={<PlusIcon/>} BtnName="Upload Document" onClick={UploadDocument} BtnColor='btn-primary'/>
          <DashBtn BtnIcon={<FolderPlsIcon/>} BtnName={'Create Folder'} onClick={CreateFolder} />
          <DashBtn BtnIcon={<DownloadIcon/>} BtnName={'Download'} onClick={Download} />
          <DashBtn BtnIcon={<FilterIcon/>} BtnName={'Filter'} onClick={Filter} />
        </div>
      </div>
    </div>
    {/* Documents Table */}
    <div className="table-responsive rounded-3 border">
      <table className="table table-hover">
        <thead className='table-primary'>
          <tr className='smallSize'>
            <th>
              <input type="checkbox" className="form-check-input fs-6" onChange={handleSelectAll}
                checked={selectedDocuments.length === documents.length && documents.length > 0} />
            </th>
            <th>Name</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th>File Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>
                <input type="checkbox" className="form-check-input"
                  checked={selectedDocuments.includes(document.id)} 
                  onChange={() => SelectDocument(document.id)} />
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  {getFileIcon(document.type)}
                  <span>{document.name}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle"/>
                  <span>{document.owner}</span>
                </div>
              </td>
              <td>{document.lastModified}</td>
              <td>{document.fileSize}</td>
              <td>
                <button className="btn p-1 text-muted border-0" onClick={() => MoreActions(document.id)}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 
                      0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
};
