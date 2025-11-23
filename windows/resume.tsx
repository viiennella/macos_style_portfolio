"use client";
import WindowControls from "@/components/windowControls";
import WindowWrapper from "@/hoc/windowWrapper";
import { Download } from "lucide-react";
import Link from "next/link";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Resume() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <Link
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <Download className="icon" />
        </Link>
      </div>
      <Document file="files/resume.pdf">
        <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
      </Document>
    </>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
