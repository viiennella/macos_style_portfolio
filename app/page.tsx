"use client";
import { Welcome } from "@/components/welcome";
import TerminalWindow from "@/windows/terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Home() {
  return (
    <div>
      <Welcome />
      <TerminalWindow />
    </div>
  );
}
