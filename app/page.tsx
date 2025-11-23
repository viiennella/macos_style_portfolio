"use client";
import { Welcome } from "@/components/welcome";
import TerminalWindow from "@/windows/terminal";
import SafariWindow from "@/windows/safari";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const ResumeWindow = dynamic(() => import("@/windows/resume"), { ssr: false });

gsap.registerPlugin(Draggable);

export default function Home() {
  return (
    <div>
      <Welcome />
      <TerminalWindow />
      <SafariWindow />
      <ResumeWindow />
    </div>
  );
}
