"use client";

import { FinderItem, locations } from "@/constants/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";
import useWindowStore, { WindowKey } from "@/store/window";
import useLocationStore from "@/store/location";

gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];
export default function HomeFolders() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  function handleOpenProjectFinder(project: FinderItem) {
    setActiveLocation(project);
    openWindow("finder");
  }
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <Image
              src="/images/folder.png"
              alt={project.name}
              width={100}
              height={100}
            />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
