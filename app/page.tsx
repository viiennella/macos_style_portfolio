"use client";
import { Welcome } from "@/components/welcome";
import TerminalWindow from "@/windows/terminal";
import SafariWindow from "@/windows/safari";
import dynamic from "next/dynamic";
import FinderWindow from "@/windows/finder";
import TextFileWindow from "@/windows/textFile";
import ImageFileWindow from "@/windows/imageFile";
import ContactWindow from "@/windows/contact";
import HomeFolders from "@/components/home";
import PhotosWindow from "@/windows/photos";

const ResumeWindow = dynamic(() => import("@/windows/resume"), { ssr: false });

gsap.registerPlugin(Draggable);

/**
 * Renders the desktop-like home view composed of multiple window components.
 *
 * The component returns a container with the following windows rendered in order:
 * Welcome, TerminalWindow, SafariWindow, ResumeWindow (client-only), FinderWindow,
 * TextFileWindow, ImageFileWindow, and ContactWindow.
 *
 * @returns A React element containing the assembled home UI windows
 */
export default function Home() {
  return (
    <div>
      <Welcome />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
      <FinderWindow />
      <TextFileWindow />
      <ImageFileWindow />
      <ContactWindow />
      <PhotosWindow />
      <HomeFolders />
    </div>
  );
}