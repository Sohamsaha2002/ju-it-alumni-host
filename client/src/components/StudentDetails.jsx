import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const StudentDetails = ({ batch }) => {
  const pdfPath = `/assets/student_details/${batch}.pdf`;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Student Details for {batch}</h2>
      <div className="h-96 overflow-auto">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdfPath} />
        </Worker>
      </div>
    </div>
  );
};

export default StudentDetails;