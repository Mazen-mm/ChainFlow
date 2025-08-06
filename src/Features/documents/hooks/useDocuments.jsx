import { useState } from 'react';
import { DocIcon, FolderIcon } from '../../../assets/Icons/SVG';

export default function useDocuments () {
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



  const getFileIcon = (type) => {
    if (type === 'folder') {
      return <FolderIcon/>
    } 
    else {
      return <DocIcon fill={'#0F345C'}/>
    }
  };



  const isSelected = (id) => selectedDocuments.includes(id);

  return {
    documents,
    selectedDocuments,
    SelectDocument,
    handleSelectAll,
    getFileIcon,
    isSelected,
  };
};

