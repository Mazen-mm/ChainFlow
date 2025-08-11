import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocuments, uploadDocument, deleteDocument } from '../slice';
import DocumentTable from '../ui/organisms/DocumentTable';

export default function DocumentsListPage() {
  const dispatch = useDispatch();
  const { documents, loading, error } = useSelector((state) => state.documents);
  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('document', file);
      dispatch(uploadDocument(formData));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this document?')) {
      dispatch(deleteDocument(id));
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Documents</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Document
        </button>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleUpload}
        />
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}
      <DocumentTable documents={documents} onDelete={handleDelete} />
    </div>
  );
}
