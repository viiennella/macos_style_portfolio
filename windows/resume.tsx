"use client";
import WindowControls from "@/components/windowControls";
import WindowWrapper from "@/hoc/windowWrapper";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker/pdf.worker.min.mjs";

const RESUME_FILE_PATH = "files/resume.pdf";

function Resume() {
  const [numPages, setNumPages] = useState<number>();
  const [error, setError] = useState<string>();
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <Link
          href={RESUME_FILE_PATH}
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </Link>
      </div>
      <Document
        file={RESUME_FILE_PATH}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => setError(error.message)}
        loading={<div className="p-4">Loading PDF...</div>}
        error={
          <div className="p-4 text-red-500">Failed to load PDF: {error}</div>
        }
      >
        <Page
          pageNumber={1}
          renderAnnotationLayer
          renderTextLayer
          width={800}
        />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
