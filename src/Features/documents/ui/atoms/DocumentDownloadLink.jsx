import React from 'react';

export default function DocumentDownloadLink({ url, fileName }) {
  return (
    <a
      href={url}
      download={fileName}
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download
    </a>
  );
}
