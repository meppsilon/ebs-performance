import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Layout from '../../components/Layout';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { pdfjs } from 'react-pdf';

import '../../css/pdf.css'

import combinePDF from '../../img/CombineTraining.pdf';

if (typeof window !== 'undefined' && 'Worker' in window) {
  pdfjs.GlobalWorkerOptions.workerPort = new Worker(
    new URL('pdfjs-dist/legacy/build/pdf.worker', import.meta.url)
  );
}

const CombineTraining = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages);
  };

  return (
    <Layout className="bg-ebsBlack">
      <div className="max-w-screen-md md:mx-auto mx-6 my-10">
        <h1 className="text-2xl text-white font-bold mb-10">
          Combine Training
        </h1>
        <Document
          file={`./${combinePDF}`}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{
            cMapUrl: 'cmaps/',
            cMapPacked: true,
          }}
          className="bg-white"
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </Layout>
  );
};

export default CombineTraining;
